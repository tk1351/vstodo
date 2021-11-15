import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findUsers(): Promise<User[]> {
    return this.usersService.findUsers();
  }

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    return this.usersService.createUser(createUserDto);
  }

  @Post('/login')
  async login(
    @Body() authCredentialsDto: AuthCredentialsDto,
    @Res() response: Response,
  ) {
    const token = await this.usersService.login(authCredentialsDto);
    response.cookie('token', token, { httpOnly: true });
    return response.json({ token });
  }
}
