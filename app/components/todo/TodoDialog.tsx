import {
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material'
import {
  ArrowDropDownCircleOutlined,
  AssignmentOutlined,
} from '@mui/icons-material'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { css } from '@emotion/react'
import { dialogState } from '../../recoil/atoms/dialog'
import { todoState } from '../../recoil/atoms/todo'
import MenuButtons from './MenuButtons'

type TodoDialogProps = {}

const todoDialogContentWrapper = css`
  display: flex;
`

const iconStyle = css`
  margin-right: 0.5rem;
`

const TodoDialog: FC<TodoDialogProps> = () => {
  const [open, setOpen] = useRecoilState(dialogState)
  const [todo, setTodo] = useRecoilState(todoState)

  const handleClose = () => {
    setOpen(false)
    setTodo(undefined)
  }

  if (todo) {
    const { title, content, status } = todo
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <Grid container justifyContent="flex-start">
          <DialogTitle id="dialog-title">{title}</DialogTitle>
        </Grid>
        <Grid container justifyContent="flex-start">
          <DialogContent id="dialog-description">
            <div css={todoDialogContentWrapper}>
              <div css={iconStyle}>
                <ArrowDropDownCircleOutlined color="inherit" fontSize="small" />
              </div>
              <div>
                <DialogContentText>
                  Status:
                  <span css={{ marginLeft: '0.5rem' }}>
                    <Chip label={status} size="small" />
                  </span>
                </DialogContentText>
              </div>
            </div>
            <div css={todoDialogContentWrapper}>
              <div css={iconStyle}>
                <AssignmentOutlined color="inherit" fontSize="small" />
              </div>
              {content ? (
                <div>
                  <DialogContentText css={{ fontWeight: 'bold' }}>
                    {content}
                  </DialogContentText>
                </div>
              ) : (
                <div>
                  <DialogContentText css={{ fontWeight: 'bold' }}>
                    No content
                  </DialogContentText>
                </div>
              )}
            </div>
          </DialogContent>
        </Grid>
        <Grid>
          <DialogActions>
            <MenuButtons />
          </DialogActions>
        </Grid>
      </Dialog>
    )
  }
  return <></>
}

export default TodoDialog
