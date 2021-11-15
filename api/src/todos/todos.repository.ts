import { EntityRepository, Repository } from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './models/todo.entity';
import { User } from '../users/models/user.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';

@EntityRepository(Todo)
export class TodosRepository extends Repository<Todo> {
  async findTodos(user: User): Promise<Todo[]> {
    const { id } = user;

    const todos = await this.find({ userId: id });

    return todos;
  }

  async findTodoById(id: number, user: User): Promise<Todo> {
    const userId = user.id;
    const todo = await this.findOne({ id, userId });
    if (!todo) throw new NotFoundException(`ID: ${id}のtodoは存在しません`);

    return todo;
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

  async updateStatus(id: number, user: User): Promise<boolean> {
    const todo = await this.findTodoById(id, user);

    const { status } = todo;
    if (status === 'done')
      throw new BadRequestException('既にstatusがdoneです');

    if (status === 'todo') {
      todo.status = 'doing';
    }

    if (status === 'doing') {
      todo.status = 'done';
    }

    await todo.save();
    return true;
  }

  async updateTodo(
    id: number,
    updateTodoDto: UpdateTodoDto,
    user: User,
  ): Promise<boolean> {
    const todo = await this.findTodoById(id, user);

    const { title, content } = updateTodoDto;

    todo.title = title;
    todo.content = content;
    await todo.save();

    return true;
  }
}
