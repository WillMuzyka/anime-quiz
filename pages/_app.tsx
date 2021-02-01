import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme, { ITheme } from '../src/utils/theme';
import db from '../db.json';
import { ReactPropTypes } from 'react';

interface IApp extends React.FC {
  pageProps: ReactPropTypes;
  Component: any;
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }: { theme: ITheme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default function App({ Component, pageProps }: IApp) {
  return (
    <>
      <Head>
        <meta property="og:image" content={db.bg} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}