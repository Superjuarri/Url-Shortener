import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'

import UrlsContextProvider from '../contexts/UrlsContext'

import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <UrlsContextProvider>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </UrlsContextProvider>
    )
  }
}
