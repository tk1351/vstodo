import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { DefaultEntity } from '../../entity';
import { Todo } from '../../todos/models/todo.entity';

@Entity('users')
@Unique(['name'])
export class User extends DefaultEntity {
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(() => Todo, (todos) => todos.user)
  todos: Todo[];
}
