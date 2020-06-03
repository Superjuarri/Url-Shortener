import React from 'react'

import Navbar from '../Navbar/index'
import Footer from '../Footer/index'

import { Wrapper, Content } from './styles'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export default Layout
