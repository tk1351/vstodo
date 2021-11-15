import { DefaultType } from '.'

export interface ITodoType extends DefaultType {
  title: string
  content: string
  status: 'todo' | 'doing' | 'done'
  userId: number
}
