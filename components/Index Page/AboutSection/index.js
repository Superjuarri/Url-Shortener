import React from 'react'

import {
  Wrapper,
  Content,
  Caret,
  Div,
  Title,
  Text,
  A,
  Arrow,
  LinkWrapper,
  Image,
  Ellipse
} from './styles'

const AboutSection = () => {
  return (
    <Wrapper>
      <Content>
        <Caret />
        <Div>
          <Title>It Takes No Time!</Title>
          <Text>
            The fastest way to shorten your url is by putting it into the Url
            Shortener tool. Just copy your url and paste it into the tool. It
            really is that simple and quick. Go head and try it out.
          </Text>
          <LinkWrapper>
            <A href=''>Shorten Links </A>
            <Arrow fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z'
                fill='#3E64FF'
              />
            </Arrow>
          </LinkWrapper>
        </Div>
      </Content>
      <Image src='gooch.png' alt='Gooch' />

      <Ellipse
        width='43'
        height='43'
        viewBox='0 0 43 43'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M37.0081 21.5081C37.0081 24.5753 36.0985 27.5736 34.3945 30.1239C32.6904 32.6742 30.2684 34.6619 27.4347 35.8357C24.601 37.0094 21.4828 37.3165 18.4745 36.7182C15.4663 36.1198 12.703 34.6428 10.5342 32.4739C8.36531 30.3051 6.88831 27.5418 6.28993 24.5335C5.69154 21.5253 5.99866 18.4071 7.17242 15.5734C8.34619 12.7397 10.3339 10.3176 12.8842 8.61358C15.4345 6.90953 18.4328 6 21.5 6'
          stroke='rgba(62, 100, 255, 0.07)'
          strokeWidth='10.3387'
        />
      </Ellipse>
    </Wrapper>
  )
}

export default AboutSection
