import { Column, Entity, Unique } from 'typeorm';

@Entity('users')
@Unique(['name'])
export class User {
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
