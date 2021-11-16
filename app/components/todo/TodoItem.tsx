import { Button } from '@mui/material'
import React, { createContext, FC } from 'react'
import { css } from '@emotion/react'
import { ITodoType } from '../../types/todo'
import { useSetRecoilState } from 'recoil'
import { dialogState } from '../../recoil/atoms/dialog'
import { todoState } from '../../recoil/atoms/todo'
import TodoDialog from './TodoDialog'
import MenuButtons from './MenuButtons'

type TodoItemProps = {
  todo: ITodoType
}

const todoItemWrapper = css`
  display: flex;
  justify-content: space-between;
`

export const TodoContext = createContext<ITodoType | undefined>(undefined)

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  console.log('todo')
  const { title } = todo

  const setOpen = useSetRecoilState(dialogState)
  const setTodo = useSetRecoilState(todoState)

  const onOpenTodoDialogClicked = (todo: ITodoType) => {
    setOpen(true)
    setTodo(todo)
  }
  return (
    <div css={todoItemWrapper}>
      <div>
        <Button color="inherit" onClick={() => onOpenTodoDialogClicked(todo)}>
          {title}
        </Button>
        <TodoDialog />
      </div>
      <div>
        <TodoContext.Provider value={todo}>
          <MenuButtons />
        </TodoContext.Provider>
      </div>
    </div>
  )
}

export default TodoItem
