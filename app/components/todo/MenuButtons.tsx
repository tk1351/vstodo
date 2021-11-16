import { EditOutlined, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { FC } from 'react'
import UpdateStatusButton from './UpdateStatusButton'

type MenuButtonsProps = {}

const MenuButtons: FC<MenuButtonsProps> = () => {
  return (
    <>
      <UpdateStatusButton />
      <IconButton>
        <EditOutlined css={{ color: '#5996fa' }} />
      </IconButton>
      <IconButton>
        <RemoveCircleOutline css={{ color: '#d32f2f' }} />
      </IconButton>
    </>
  )
}

export default MenuButtons
