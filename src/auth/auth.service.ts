import {HttpException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async login(email: string, password: string): Promise<AuthEntity> {
        // Buscar o usuário pelo email
        const user = await this.prisma.user.findUnique({ where: { email: email } });

        // Erro caso o usuário não seja encontrado
        if (!user) {
        throw new NotFoundException(`Credenciais inválidas`);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // Se a senha não for válida, lançar um erro de autenticação
        if (!isPasswordValid) {
        throw new UnauthorizedException('Credenciais inválidas');
        }
        const userData: AuthEntity = {
            id: user.id,
            name: user.name,
            role: user.role,
            accessToken: this.jwtService.sign({ userId: user.id }),
        };

        // gerar o token JWT
        return userData;
    }

    async refreshToken(userId: number): Promise<{accessToken: string}> {
        try{
            // Busca os dados atualizados do usuário no banco
            const currentUser = await this.prisma.user.findUnique({ 
                where: { id: userId} 
            });
            if (!currentUser) {
                throw new NotFoundException('Usuário não encontrado');
            }

            // Gera um novo token com os dados atualizados
            return {accessToken: this.jwtService.sign({ userId: currentUser.id })};
        } catch (error) {
            throw new HttpException(error, error.status || 500);
        }
    }
}

  