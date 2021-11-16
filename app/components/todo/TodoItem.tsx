import { Button } from '@mui/material'
import React, { FC } from 'react'
import { css } from '@emotion/react'
import { ITodoType } from '../../types/todo'
import { useSetRecoilState } from 'recoil'
import { dialogState } from '../../recoil/atoms/dialog'
import { todoState } from '../../recoil/atoms/todo'
import MenuButtons from './MenuButtons'
import TodoDialog from './TodoDialog'

type TodoItemProps = {
  todo: ITodoType
}

const todoItemWrapper = css`
  display: flex;
  justify-content: space-between;
`

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
        <MenuButtons />
      </div>
    </div>
  )
}

export default TodoItem
