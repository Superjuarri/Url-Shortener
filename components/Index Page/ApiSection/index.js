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
  Lightning,
  L
} from './styles'

const ApiSection = () => {
  return (
    <Wrapper>
      <Image src='gooch.png' alt='Gooch' />

      <Content>
        <Caret />

        <Div>
          <Title>How Does It Work?</Title>
          <Text>
            The url shortener tool makes use of Rel.ink’s api in order to create
            your shortened links. It is secure and reliable. The url is created
            very quickly due to the api using Cloudflare.
          </Text>
          <LinkWrapper>
            <A href=''>Check Out Api</A>
            <Arrow fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z'
                fill='#3E64FF'
              />
            </Arrow>
          </LinkWrapper>
        </Div>

        <L
          width='67'
          height='66'
          viewBox='0 0 67 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.5428 42.315V33.8933L0.933105 52.503V60.9247L19.5428 42.315ZM4.83523 65.4444H13.257L31.8667 46.8347H23.4449L4.83523 65.4444ZM19.5428 8.62793V0.310486H19.4385L0.933105 18.8158V27.2376L19.5428 8.62793ZM0.933105 35.6594V44.0812L19.5428 25.4715V17.0497L0.933105 35.6594ZM66.067 65.4444H55.3659L66.067 54.7433V65.4444ZM21.6788 65.4444H30.1006L48.7103 46.8347H40.2885L21.6788 65.4444ZM46.9441 65.4444H38.5224L57.132 46.8347H65.5538L46.9441 65.4444ZM11.0167 0.310486H0.933105V10.3941L11.0167 0.310486Z'
            fill='#F9F871'
          />
        </L>
      </Content>

      <Lightning
        width='23'
        height='43'
        viewBox='0 0 23 43'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.7893 40.1807L5.21057 27.6019L17.7893 15.0231L5.21057 2.44437'
          stroke='rgba(62, 100, 255, 0.07)'
          strokeWidth='6.28938'
        />
      </Lightning>
    </Wrapper>
  )
}

export default ApiSection
