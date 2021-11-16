import { Container, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { topWrapper } from '../styles/components/top.styles'
import AddItem from './todo/AddItem'
import Todos from './todo/Todos'

type TopProps = {}

const Top: FC<TopProps> = () => {
  console.log('top')
  return (
    <Container component="main" maxWidth={false} css={topWrapper}>
      <Grid container justifyContent="center">
        <Typography variant="h4" component="h2">
          To Do Lists
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <AddItem />
      </Grid>
      <Todos />
    </Container>
  )
}

export default Top
