import styled from 'styled-components'

export const Wrapper = styled.section`
  overflow-x: visible;
  padding: 7.5vh 0 15vh 0;

  display: grid;
  gap: 5%;

  justify-self: center;
  grid-template-areas: 'image content';
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
  grid-template-columns: 95fr 5fr;

  @media (max-width: 800px) {
    justify-self: center;

    grid-template-columns: 5fr 95fr;
  }
`

export const Caret = styled.div`
  position: absolute;
  top: 6px;
  right: 0;

  height: 26px;
  width: 8px;

  background-color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 800px) {
    position: relative;
  }
`

export const Div = styled.div``

export const Title = styled.h3`
  width: 100%;
  margin: 0;

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

  @media (max-width: 800px) {
    width: 100%;
    max-width: none;
  }
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
  /* height: 300px; */

  grid-area: image;
  justify-self: center;

  @media (max-width: 800px) {
    width: 50%;
  }
`

export const Lightning = styled.svg`
  position: absolute;
  left: -10%;

  width: 20%;
  height: auto;
`

export const L = styled.svg`
  position: absolute;
  right: -11%;
  bottom: -55%;

  transform: scaleX(-1);

  width: 40%;
  height: 40%;

  @media (max-width: 800px) {
    right: -33%;
  }
`
