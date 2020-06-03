import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 0;

  background: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${({ theme }) => theme.dimensions.contentWidth};
  max-width: ${({ theme }) => theme.dimensions.contentWidthMax};

  display: flex;
  justify-content: space-around;
`

export const Ellipse = styled.svg`
  position: absolute;
  top: -25%;
  left: -15%;

  width: 40%;

  transform: rotate(-90deg);
`

export const Heart = styled.svg`
  position: absolute;
  bottom: -15%;
  right: -5%;

  width: 15%;
`
