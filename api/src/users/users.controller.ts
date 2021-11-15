import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { GetCurrentUser } from 'src/auth/get-user.decorator';
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

  @Post('/logout')
  @UseGuards(AuthGuard('jwt'))
  async logout(@Res() response: Response, @GetCurrentUser() user: User) {
    await this.usersService.findUserById(user);
    return response.clearCookie('token').json(true);
  }
}
