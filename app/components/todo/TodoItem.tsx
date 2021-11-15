import { IconButton, Typography } from '@mui/material'
import {
  CheckCircleOutlineOutlined,
  EditOutlined,
  RemoveCircleOutline,
} from '@mui/icons-material'
import React, { FC } from 'react'
import { css } from '@emotion/react'
import { ITodoType } from '../../types/todo'

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
  return (
    <div css={todoItemWrapper}>
      <div>
        <Typography variant="h6" component="h4">
          {title}
        </Typography>
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
