import { EntityRepository, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './models/todo.entity';
import { User } from '../users/models/user.entity';

@EntityRepository(Todo)
export class TodosRepository extends Repository<Todo> {
  async findTodos(user: User): Promise<Todo[]> {
    const { id } = user;

    const todos = await this.find({ userId: id });

    return todos;
  }

  async createTodo(createTodoDto: CreateTodoDto, user: User): Promise<boolean> {
    const { title, content } = createTodoDto;

    const todo = this.create();
    todo.title = title;
    todo.user = user;
    todo.status = 'todo';

    if (content) todo.content = content;
    if (!content) todo.content = null;

    await todo.save();

    return true;
  }
}
