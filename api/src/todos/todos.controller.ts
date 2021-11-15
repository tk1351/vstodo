import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrentUser } from '../auth/get-user.decorator';
import { User } from '../users/models/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
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

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  todo(@Param('id') id: number, @GetCurrentUser() user: User): Promise<Todo> {
    return this.todosService.findTodoById(id, user);
  }

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createTodoDto: CreateTodoDto,
    @GetCurrentUser() user: User,
  ): Promise<boolean> {
    return this.todosService.createTodo(createTodoDto, user);
  }

  @Patch('/status/:id')
  @UseGuards(AuthGuard('jwt'))
  updateStatus(
    @Param('id') id: number,
    @GetCurrentUser() user: User,
  ): Promise<boolean> {
    return this.todosService.updateStatus(id, user);
  }

  @Patch('/todo/:id')
  @UseGuards(AuthGuard('jwt'))
  updateTodo(
    @Param('id') id: number,
    @Body() updateTodoDto: UpdateTodoDto,
    @GetCurrentUser() user: User,
  ): Promise<boolean> {
    return this.todosService.updateTodo(id, updateTodoDto, user);
  }
}
