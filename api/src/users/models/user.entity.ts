import { Column, Entity, Unique } from 'typeorm';
import { DefaultEntity } from '../../entity';

@Entity('users')
@Unique(['name'])
export class User extends DefaultEntity {
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
