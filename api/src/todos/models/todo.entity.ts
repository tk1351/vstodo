import { Column, Entity } from 'typeorm';

@Entity('todos')
export class Todo {
  @Column()
  title: string;

  @Column({ nullable: true })
  content?: string;

  @Column()
  status: string;
}
