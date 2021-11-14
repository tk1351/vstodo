import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async findUsers(): Promise<User[]> {
    return await this.usersRepository.user();
  }

  async createUser(createUserDto: CreateUserDto): Promise<boolean> {
    return await this.usersRepository.createUser(createUserDto);
  }
}
