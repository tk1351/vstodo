import { Controller, Get } from '@nestjs/common';
import { User } from './models/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findUsers(): Promise<User[]> {
    return this.usersService.findUsers();
  }
}
