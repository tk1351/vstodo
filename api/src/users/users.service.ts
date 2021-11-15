import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.entity';
import { UsersRepository } from './users.repository';

export type JwtPayload = {
  userId: number;
};
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async findUsers(): Promise<User[]> {
    return await this.usersRepository.user();
  }

  async createUser(createUserDto: CreateUserDto): Promise<boolean> {
    return await this.usersRepository.createUser(createUserDto);
  }

  async login(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const userId = await this.usersRepository.validateUserPassword(
      authCredentialsDto,
    );
    if (!userId) throw new UnauthorizedException('認証情報が無効です');

    const payload: JwtPayload = { userId };
    const token = this.jwtService.sign(payload);

    return token;
  }
}
