import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodosRepository } from './todos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodosRepository])],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
