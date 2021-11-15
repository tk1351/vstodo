import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { FC } from 'react'
import Link from 'next/link'

type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              VSTodo
            </Typography>
          </Link>
          <Button color="inherit">
            <Link href="/login">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
