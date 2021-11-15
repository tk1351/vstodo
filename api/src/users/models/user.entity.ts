import { Column, Entity, OneToMany, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { DefaultEntity } from '../../entity';
import { Todo } from '../../todos/models/todo.entity';

@Entity('users')
@Unique(['name'])
export class User extends DefaultEntity {
  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  salt: string;

  @OneToMany(() => Todo, (todos) => todos.user)
  todos: Todo[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
