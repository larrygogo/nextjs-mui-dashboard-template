import {ReactElement, ReactNode} from 'react'
import Head from 'next/head'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {SettingsConsumer, SettingsProvider} from 'src/@core/context/settingsContext'
import {createEmotionCache} from 'src/@core/utils/create-emotion-cache'
import 'styles/globals.css'
import {CacheProvider, EmotionCache} from "@emotion/react";
import ThemeComponent from "src/@core/theme/ThemeComponent";
import UserLayout from "src/layouts/UserLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPageWithLayout
  emotionCache: EmotionCache
}


const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
// Router.events.on('routeChangeStart', () => {
//   NProgress.start()
// })
// Router.events.on('routeChangeError', () => {
//   NProgress.done()
// })
// Router.events.on('routeChangeComplete', () => {
//   NProgress.done()
// })

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template'/>
        <meta name='viewport' content='initial-scale=1, width=device-width'/>
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({settings}) => {
            return (
              <ThemeComponent settings={settings}>
                <Head>
                  <title>{settings.title}</title>
                </Head>
                {getLayout(<Component {...pageProps} />)}
              </ThemeComponent>
            )
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default App
