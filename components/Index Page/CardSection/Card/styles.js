import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 225px;

  display: flex;
  flex-direction: column;
  padding: 35px 65px;

  background: #ffffff;
  border-radius: 8px;

  z-index: 1;

  /* @media (max-width: 800px) {
    width: 100%;

    flex-direction: row;
  } */
`

export const Img = styled.img`
  height: 100px;
`

export const Content = styled.div`
  align-self: center;
  width: 170%;
`

export const Title = styled.h3`
  text-align: center;
  font-size: 18px;
`

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
`
