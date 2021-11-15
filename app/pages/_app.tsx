import '../styles/reset.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { CssBaseline, ThemeProvider } from '@mui/material'
import createEmotionCache from '../src/createEmotionCache'
import theme from '../src/theme'
import { currentUserState } from '../recoil/atoms/currentUser'
import { fetchCurrentUser } from '../src/api/auth'
import { isLoginState } from '../recoil/atoms/isLogin'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const AppInit = () => {
  const setCurrentUser = useSetRecoilState(currentUserState)
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)

  useEffect(() => {
    ;(async () => {
      try {
        const user = await fetchCurrentUser()
        setCurrentUser(user)
        if (user) setIsLogin(true)
      } catch {
        setCurrentUser(null)
        setIsLogin(false)
      }
    })()
  }, [isLogin])
  return null
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <AppInit />
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  )
}

export default MyApp
