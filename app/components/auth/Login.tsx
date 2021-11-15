import { Container, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'

type LoginProps = {}

const Login: FC<LoginProps> = () => {
  return (
    <Container component="main" maxWidth={false}>
      <Grid container justifyContent="center">
        <Typography variant="h4" component="h2">
          Login
        </Typography>
      </Grid>
    </Container>
  )
}

export default Login
