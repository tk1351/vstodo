import { CreateTodoDto } from '../../types/todo'
import { api } from './api'

export const FETCH_TODOS_API_URL = '/todos'

export const addTodo = async (dto: CreateTodoDto) => {
  const res = await api.post<boolean>('/todos/create', dto)
  return res.data
}
