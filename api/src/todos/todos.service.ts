import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/models/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosRepository) private todosRepository: TodosRepository,
  ) {}

  async createTodo(createTodoDto: CreateTodoDto, user: User): Promise<boolean> {
    return await this.todosRepository.createTodo(createTodoDto, user);
  }
}
