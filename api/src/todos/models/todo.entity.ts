import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../../entity';

@Entity('todos')
export class Todo extends DefaultEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  content?: string;

  @Column()
  status: string;
}
