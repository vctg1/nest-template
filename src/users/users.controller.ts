import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, UseGuards, Req, Res, Query, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import type { Request, Response } from 'express';

export interface UserRequest extends Request {
  user: {
    id: number;
    role: string;
  };
}

@Controller('users')
@ApiTags('User')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'User created', example: {id: '1'} })
  @ApiOperation({ summary: 'Create user'})  
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      // Check if the user already exists
      const existingUser = await this.usersService.findByEmail(createUserDto.email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      return await this.usersService.create(createUserDto).then((user) => {
        return res.status(201).json(user);
      });
    } catch (error) {
      Logger.error('Error creating user', error);
      throw error;
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard ,RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ type: UserEntity, isArray: true, description: 'Users found'})
  @ApiQuery({ name: 'page', required: false, type: String, description: 'Página' })
  @ApiQuery({ name: 'limit', required: false, type: String, description: 'Limite por página' })
  async findAll(@Req() req: UserRequest, @Res() res: Response,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    ) {
    try{
      const {id} = req.user;
      const totalUsers = await this.usersService.countUsers(id);
      const paginatedUsers = await this.usersService.findAll(+page, +limit, id);
      if (!paginatedUsers || paginatedUsers.length === 0) {
        return res.status(404).json({ message: 'No users found' });
      }
      res.setHeader('X-Total-Count', totalUsers.toString());
      return res.status(200).json(paginatedUsers);
    }
    catch (error) {
      Logger.error('Error finding users', error);
      throw new HttpException('Error finding users', error.status|| 500);
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user by id' })
  @ApiOkResponse({ type: UserEntity, description: 'User found'})
  async findOne(@Param('id') id: string) {
    try{
      return this.usersService.findOne(+id).then((user) => {
        if (!user) {
          throw new HttpException('User not found', 404);
        }
        return user;
      }
      );
    }
    catch (error) {
      Logger.error('Error finding user', error);
      throw new HttpException("Error finding user", error.status || 500);
    } 
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const user = await this.usersService.findOne(+id);
      if (!user) {
        throw new HttpException('User not found', 404);
      }
      return this.usersService.update(+id, updateUserDto).then((user) => {
        return user;
      });
    }
    catch (error) {
      Logger.error('Error updating user', error);
      throw new HttpException('Error updating user', error.status || 500);
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async remove(@Param('id') id: string, @Res() res: Response) {
    try{
      const user = await this.usersService.findOne(+id);
      if (!user) {
        throw new HttpException('User not found', 404);
      }
      return this.usersService.remove(+id).then(() => {
        return res.status(204).send();
      });
    }
    catch (error) {
      Logger.error('Error deleting user', error);
      throw new HttpException('Error deleting user', error.status || 500);
    }
  }
}
