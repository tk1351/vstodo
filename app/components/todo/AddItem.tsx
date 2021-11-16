import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'
import { addTodo } from '../../src/api/todo'
import { AddItemInputsType } from '../../types/input'
import { CreateTodoDto } from '../../types/todo'

const defaultValues: AddItemInputsType = {
  title: '',
  content: '',
}

const AddItem = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const { control, handleSubmit } = useForm<AddItemInputsType>({
    defaultValues,
  })

  const { mutate } = useSWRConfig()

  const onSubmit: SubmitHandler<AddItemInputsType> = async (data) => {
    const { title, content } = data

    if (content === '') {
      const dto: CreateTodoDto = {
        title,
        content: null,
      }
      await addTodo(dto)
      mutate('/todos')
    } else {
      const dto: CreateTodoDto = data
      await addTodo(dto)
    }
    mutate('/todos')
    setOpen(false)
  }
  return (
    <>
      <Button
        css={{ color: '#388e3c' }}
        variant="outlined"
        onClick={handleOpen}
      >
        Add Item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <Grid container justifyContent="center">
          <DialogTitle id="dialog-title">Add Item</DialogTitle>
        </Grid>
        <DialogContent id="dialog-description">
          <Grid container justifyContent="center">
            <form onSubmit={handleSubmit(onSubmit)} css={{ width: '60vw' }}>
              <div>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      variant="filled"
                      label="title"
                      fullWidth
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="content"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      variant="filled"
                      label="content"
                      multiline
                      rows={3}
                      fullWidth
                    />
                  )}
                />
              </div>
              <Grid container justifyContent="flex-end">
                <Button
                  variant="contained"
                  css={{ backgroundColor: '#388e3c' }}
                  type="submit"
                >
                  Add
                </Button>
              </Grid>
            </form>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddItem
