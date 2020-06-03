import styled from 'styled-components'

export const Wrapper = styled.header`
  width: ${({ theme }) => theme.dimensions.contentWidth};
  display: grid;
  align-content: center;
  justify-items: center;

  width: 100%;
  height: 65vh;
`

export const Content = styled.div`
  margin: 0 auto;
  position: relative;

  width: ${({ theme }) => theme.dimensions.contentWidth};
  max-width: 1140px;

  display: grid;

  @media (max-width: 800px) {
  }
`

export const Title = styled.h1`
  position: relative;
  margin-bottom: 0.5rem;

  text-align: center;
  font-size: 3.5rem;

  color: #000646;

  span {
    position: relative;
    margin-right: 0.25rem;
    display: inline-block;
    z-index: 2;

    span {
      position: relative;
      z-index: 1;
    }

    div {
      position: absolute;
      height: 0.833rem;
      height: 25%;
      background-color: ${({ theme }) => theme.colors.secondary};
      width: 100%;
      bottom: 10%;
      left: 0;
      content: '';
      z-index: 0;
    }
  }
`
export const SubTitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #3c4067;
`

export const LinksWrapper = styled.div`
  margin-top: 2.5%;

  display: flex;
  justify-content: center;

  a:first-child {
    margin-right: 2rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    min-width: 50%;
    justify-self: center;

    a:first-child {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`

export const Link = styled.a`
  margin: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem 1.8rem;

  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 0.944rem;
  line-height: 1;

  color: ${({ primary, theme }) => (!primary ? theme.colors.primary : '#fff')};
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : '#fff'};

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  cursor: pointer;

  transition: all 300ms ease-in-out;

  :hover {
    color: ${({ primary }) => !primary && '#fff'};
    background-color: ${({ primary, theme }) =>
      !primary ? theme.colors.primary : theme.colors.primaryMuted};
    border: 1px solid
      ${({ primary, theme }) =>
        primary ? theme.colors.primaryMuted : theme.colors.primary};
  }
`

export const L = styled.svg`
  position: absolute;
  width: 80px;
  height: auto;

  bottom: -25%;

  z-index: -1;
`

export const Heart = styled.svg`
  position: absolute;
  width: 45px;
  height: auto;

  top: -3%;
  left: 15%;

  z-index: -1;
`

export const Elipse = styled.svg`
  position: absolute;
  width: 75px;
  right: 25%;
  top: -25%;

  transform: rotate(175deg);

  z-index: -1;
`

export const Lightning = styled.svg`
  position: absolute;
  width: 42px;
  bottom: -10%;
  right: 15%;
  transform: rotate(90deg);

  z-index: -1;
`

export const Dots = styled.svg`
  position: absolute;

  width: 42px;

  right: 0;

  top: -5%;

  z-index: -1;
`
