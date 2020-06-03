import React from 'react'

import { Wrapper, Content, Img, Title, Text } from './styles'

const Card = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <Wrapper>
      <Img src={imgSrc} alt={imgAlt} />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  )
}

export default Card
