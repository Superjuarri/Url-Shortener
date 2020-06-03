import React from 'react'
import Link from 'next/link'

import { Wrapper, Content, Logo, Nav, Ul, Li, A } from './styles'

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Logo>Url Shortener</Logo>
        <Nav>
          <Ul>
            <Li>
              <Link href='/'>
                <A>Home</A>
              </Link>
            </Li>
            <Li>
              <Link href='/shortener'>
                <A>Shortener</A>
              </Link>
            </Li>
            <Li>
              <Link href='/about'>
                <A>About</A>
              </Link>
            </Li>
          </Ul>
        </Nav>
      </Content>
    </Wrapper>
  )
}

export default Navbar
