import { EntityRepository, Repository } from 'typeorm';
import { User } from './models/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async user(): Promise<User[]> {
    const users = await this.createQueryBuilder('users')
      .leftJoinAndSelect('users.todos', 'todos')
      .getMany();

    return users;
  }
}
