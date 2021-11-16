import { Button, IconButton, Typography } from '@mui/material'
import {
  CheckCircleOutlineOutlined,
  EditOutlined,
  RemoveCircleOutline,
} from '@mui/icons-material'
import React, { FC } from 'react'
import { css } from '@emotion/react'
import { ITodoType } from '../../types/todo'
import TodoDialog from './TodoDialog'
import { useSetRecoilState } from 'recoil'
import { dialogState } from '../../recoil/atoms/dialog'
import { todoState } from '../../recoil/atoms/todo'

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
        <IconButton>
          <CheckCircleOutlineOutlined css={{ color: '#388e3c' }} />
        </IconButton>
        <IconButton>
          <EditOutlined css={{ color: '#5996fa' }} />
        </IconButton>
        <IconButton>
          <RemoveCircleOutline css={{ color: '#d32f2f' }} />
        </IconButton>
      </div>
    </div>
  )
}

export default TodoItem
