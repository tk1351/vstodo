import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrentUser } from '../auth/get-user.decorator';
import { User } from '../users/models/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './models/todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  todos(@GetCurrentUser() user: User): Promise<Todo[]> {
    return this.todosService.findTodos(user);
  }

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createTodoDto: CreateTodoDto,
    @GetCurrentUser() user: User,
  ): Promise<boolean> {
    return this.todosService.createTodo(createTodoDto, user);
  }
}
