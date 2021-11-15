import React, { FC } from 'react'
import Login from '../components/auth/Login'
import Navbar from '../components/common/Navbar'

type LoginProps = {}

const login: FC<LoginProps> = () => {
  return (
    <>
      <Navbar />
      <Login />
    </>
  )
}

export default login
