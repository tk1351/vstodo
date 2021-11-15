import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/models/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './models/todo.entity';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosRepository) private todosRepository: TodosRepository,
  ) {}

  async findTodos(user: User): Promise<Todo[]> {
    return await this.todosRepository.findTodos(user);
  }

  async findTodoById(id: number, user: User): Promise<Todo> {
    return await this.todosRepository.findTodoById(id, user);
  }

  async createTodo(createTodoDto: CreateTodoDto, user: User): Promise<boolean> {
    return await this.todosRepository.createTodo(createTodoDto, user);
  }
}
