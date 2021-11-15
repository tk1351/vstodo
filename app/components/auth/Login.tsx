import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { isLoginState } from '../../recoil/atoms/isLogin'
import { login } from '../../src/api/auth'
import { container } from '../../styles/components/auth/login.styles'
import { LoginInputsType } from '../../types/input'

type LoginProps = {}

const defaultValues: LoginInputsType = {
  name: '',
  password: '',
}

const Login: FC<LoginProps> = () => {
  const router = useRouter()

  const { control, handleSubmit } = useForm<LoginInputsType>({
    defaultValues,
  })

  const setIsLogin = useSetRecoilState(isLoginState)

  const onSubmit: SubmitHandler<LoginInputsType> = async (data) => {
    await login(data)
    setIsLogin(true)
    await router.push('/')
  }
  return (
    <Container component="main" maxWidth={false} css={container}>
      <Grid container justifyContent="center">
        <Typography variant="h4" component="h2">
          Login
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="filled"
              label="name"
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              variant="filled"
              label="password"
              fullWidth
            />
          )}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  )
}

export default Login
