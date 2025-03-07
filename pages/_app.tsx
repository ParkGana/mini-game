import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/configuration/theme'
import { style as Style } from '../src/configuration/style'
import '../src/configuration/preload-font.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Style />
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <title>미니 게임</title>
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}
