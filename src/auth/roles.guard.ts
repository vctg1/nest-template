import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Verifica se o usuário está autenticado e tem a role ADMIN
    if (user && (user.role !== 'ADMIN')) {
      throw new ForbiddenException('Acesso negado! Somente administradores.');
    }

    return true;
  }
}