import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 12;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private userFilter = {
    id: true,
    name: true,
    email: true,
    password: false,
    role:true,
    createdAt: true,
    updatedAt: true,
  };

  async countUsers(userId?: number) {
    // count where role is not admin
    return await this.prisma.user.count({
      where: {
        id: {
          not: userId,
        },
      },
    }).then((count) => {
      return count;
    }).catch((error) => {
      throw new HttpException(error.message, error.status || 500);
    });
  }


  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password,roundsOfHashing);
    createUserDto.password = hashedPassword;
    return await this.prisma.$transaction(async (prisma) => {
      return prisma.user.create({ data: createUserDto }).then((user) => {
        return { id: user.id };
      });
    }).catch((error) => {
      if (error.code === 'P2002') {
        console.log(error)
        throw new ConflictException(
          `A user with the same ${error.meta.target.join(', ')} already exists.`,
        );
      }
      throw new HttpException(error.message, 500);
    })
  }

  async findAll(page: number, limit: number, userId?: number) {
    return this.prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      select: this.userFilter,
      where: {
        id: {
          not: userId,
        },
      },
    }).then((users) => {
      if (users.length === 0) {
        throw new HttpException('No users found', 404);
      }
      return users;
    }).catch((error) => {
      throw new HttpException(error.message, error.status || 500);
    });
  }

  async findOne(id: number) {
    return this.prisma.$transaction(async (prisma) => {
      return prisma.user.findUnique({ where: { id }, select: this.userFilter }).then((user) => {
        if (!user) {
          throw new HttpException('User not found', 404);
        }
        return user;
      });
    }).catch((error) => {
      if (error.code === 'P2025') {
        throw new HttpException('User not found', 404);
      }
      throw new HttpException(error.message, error.status || 500);
    });
  }
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: this.userFilter,
    }).then((user) => {
      if (!user) {
        throw new HttpException('User not found', 404);
      }
      return user;
    }).catch((error) => {
      throw new HttpException(error.message, error.status || 500);
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
      updateUserDto.password,
      roundsOfHashing,
    )}
    const userData = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    }).then((user) => {
      return { id: user.id };
    }).catch((error) => {
      if (error.code === 'P2025') {
        throw new HttpException('User not found', 404);
      }
      throw new HttpException(error.message, error.status || 500);
    });
    return userData;   
  }

  async remove(id: number) {
    return await this.prisma.$transaction(async (prisma) => {
      await prisma.user.delete({ where: { id } });
      return { message: 'User deleted successfully' };
    }).catch((error) => {
      if (error.code === 'P2025') {
        throw new HttpException('User not found', 404);
      }
      throw new HttpException(error?.message, error?.status || 500);
    });
  }
}
