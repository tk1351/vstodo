import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { FC, useContext } from 'react'
import { useSetRecoilState } from 'recoil'
import { useSWRConfig } from 'swr'
import { dialogState } from '../../recoil/atoms/dialog'
import { updateStatus } from '../../src/api/todo'
import { TodoContext } from './TodoItem'

type UpdateStatusButtonProps = {}

const UpdateStatusButton: FC<UpdateStatusButtonProps> = () => {
  const todo = useContext(TodoContext)
  const setOpen = useSetRecoilState(dialogState)

  const { mutate } = useSWRConfig()

  const onUpdateStatusClicked = async (id: number | undefined) => {
    if (id) {
      await updateStatus(id)
      setOpen(false)
      mutate('/todos')
    }
  }
  return (
    <IconButton onClick={() => onUpdateStatusClicked(todo?.id)}>
      <CheckCircleOutlineOutlined css={{ color: '#388e3c' }} />
    </IconButton>
  )
}

export default UpdateStatusButton
