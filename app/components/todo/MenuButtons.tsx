import {
  CheckCircleOutlineOutlined,
  EditOutlined,
  RemoveCircleOutline,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { FC } from 'react'

type MenuButtonsProps = {}

const MenuButtons: FC<MenuButtonsProps> = () => {
  return (
    <>
      <IconButton>
        <CheckCircleOutlineOutlined css={{ color: '#388e3c' }} />
      </IconButton>
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
