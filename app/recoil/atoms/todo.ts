import { atom } from 'recoil'
import { ITodoType } from '../../types/todo'

export const todoState = atom<ITodoType | undefined>({
  key: 'todoState',
  default: undefined,
})
