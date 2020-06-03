import styled from 'styled-components'

export const Wrapper = styled.section`
  overflow-x: visible;
  padding: 15vh 0 7.5vh 0;

  display: grid;
  gap: 5%;

  justify-self: center;
  grid-template-areas: 'content image';
  grid-template-columns: 1fr 1fr;

  width: ${({ theme }) => theme.dimensions.contentWidth};
  max-width: ${({ theme }) => theme.dimensions.contentWidthMax};

  @media (max-width: 800px) {
    display: grid;
    grid-template-areas:
      'image'
      'content';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export const Content = styled.div`
  position: relative;

  min-width: 350px;
  max-width: 475px;

  grid-area: content;

  justify-self: end;

  display: grid;
  grid-template-columns: 5fr 95fr;

  @media (max-width: 800px) {
    justify-self: center;
  }
`

export const Caret = styled.div`
  position: relative;
  top: 6px;

  height: 26px;
  width: 8px;

  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Div = styled.div``

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.1em;
`

export const Text = styled.p`
  margin-top: 1rem;
  width: 85%;
  max-width: 475px;

  font-size: 14px;
  line-height: 200%;
  /* or 36px */

  text-align: justify;
  letter-spacing: 0.05em;

  color: #626262;
`
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  :hover {
    svg:nth-child(2) {
      transform: translate(8px, 0);
    }
  }
`

export const A = styled.a`
  margin-right: 10px;

  color: ${({ theme }) => theme.colors.primary};

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 200%;

  text-align: justify;
  text-decoration: none;
  letter-spacing: 0.135em;
`

export const Arrow = styled.svg`
  width: 16px;
  height: 16px;

  transition: 0.2s;
`

export const Image = styled.img`
  width: 80%;

  grid-area: image;
  justify-self: center;

  @media (max-width: 800px) {
    width: 50%;
  }
`

export const Ellipse = styled.svg`
  position: absolute;
  right: 5%;
  top: 52.5%;

  width: 20%;
  height: auto;

  transform: rotate(-180deg);
`
