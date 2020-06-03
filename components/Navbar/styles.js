import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 900;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #ffffff;
`

export const Content = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.dimensions.contentWidth};
  max-width: ${({ theme }) => theme.dimensions.contentWidthMax};

  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: #ffffff;
`

export const Logo = styled.h1`
  font-size: 30px;
`

export const Nav = styled.nav``

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: none;
  list-style: none;
`

export const Li = styled.li`
  margin-left: 2.5rem;
`

export const A = styled.a`
  text-decoration: none;
  color: #636363;

  transition: 0.2s;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`
