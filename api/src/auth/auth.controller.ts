import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  getAuthUser(@Req() request: Request) {
    const user = request.user;
    return this.authService.getAuthUser(user);
  }
}
