import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { FC } from 'react'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { isLoginState } from '../../recoil/atoms/isLogin'
import { currentUserState } from '../../recoil/atoms/currentUser'
import { logout } from '../../src/api/auth'

type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  console.log('login', isLogin, currentUser)

  const onLogoutClicked = async () => {
    await logout()
    setIsLogin(false)
    setCurrentUser(null)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              VSTodo
            </Typography>
          </Link>
          {isLogin && currentUser ? (
            <>
              <Button color="inherit" onClick={onLogoutClicked}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
