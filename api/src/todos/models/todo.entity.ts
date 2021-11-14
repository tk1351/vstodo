import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from '../../entity';
import { User } from '../../users/models/user.entity';

@Entity('todos')
export class Todo extends DefaultEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  content?: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.todos)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @Column()
  userId: number;
}
