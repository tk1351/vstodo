import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async user(): Promise<User[]> {
    const users = await this.createQueryBuilder('users')
      .leftJoinAndSelect('users.todos', 'todos')
      .getMany();

    return users;
  }

  async createUser(createUserDto: CreateUserDto): Promise<boolean> {
    const { name, password } = createUserDto;

    const user = this.create();
    user.name = name;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    await user.save();
    return true;
  }

  private hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
