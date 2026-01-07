import { AuthService } from './auth.service';
import { Body, Controller, Post, UseGuards, Req, Res, HttpException, Logger, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  @ApiOkResponse({ type: AuthEntity, description: 'Login successful', example: { accessToken: 'string', role: 'string' } })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }
  @Get('refresh-token')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ 
    type: AuthEntity, 
    description: 'Token refreshed successfully', 
    example: { id: 1, name: 'string', role: 'string', accessToken: 'string' } 
  })
  async refreshToken(@Req() req: { user: { id: number } }): Promise<{ accessToken: string }> {
    try{
      const userId = req.user.id;
      return this.authService.refreshToken(userId);
    }
    catch (error) {
      Logger.error('Error refreshing token', error);  
      throw new HttpException("Error refreshing token", error.status || 500);
    }
  }
}