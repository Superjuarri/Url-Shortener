import React from 'react'

import {
  Wrapper,
  Content,
  Title,
  SubTitle,
  LinksWrapper,
  Link,
  L,
  Heart,
  Elipse,
  Lightning,
  Dots
} from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <span>
            <span>Get</span>
            <div />
          </span>
          You Some <br />
          <span>
            <span>Shortened Links</span>
            <div />
          </span>
        </Title>
        <SubTitle>
          The links that you love to send. <strong>Shortened.</strong>
        </SubTitle>
        <LinksWrapper>
          <Link href='#' primary>
            Url Shortener
          </Link>
          <Link href='#'>About Site</Link>
        </LinksWrapper>

        <L viewBox='0 0 67 66' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.5428 42.315V33.8933L0.933105 52.503V60.9247L19.5428 42.315ZM4.83523 65.4444H13.257L31.8667 46.8347H23.4449L4.83523 65.4444ZM19.5428 8.62793V0.310486H19.4385L0.933105 18.8158V27.2376L19.5428 8.62793ZM0.933105 35.6594V44.0812L19.5428 25.4715V17.0497L0.933105 35.6594ZM66.067 65.4444H55.3659L66.067 54.7433V65.4444ZM21.6788 65.4444H30.1006L48.7103 46.8347H40.2885L21.6788 65.4444ZM46.9441 65.4444H38.5224L57.132 46.8347H65.5538L46.9441 65.4444ZM11.0167 0.310486H0.933105V10.3941L11.0167 0.310486Z'
            fill='#F9F871'
          />
        </L>
        <Heart
          viewBox='0 0 35 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M30.4233 4.01613L17.5 16.9395L4.57656 4.01613'
            stroke='#FF539E'
            strokeWidth='10.3387'
          />
        </Heart>

        <Elipse
          viewBox='0 0 43 43'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M37.0081 21.5081C37.0081 24.5753 36.0985 27.5736 34.3945 30.1239C32.6904 32.6742 30.2684 34.6619 27.4347 35.8357C24.601 37.0094 21.4828 37.3165 18.4745 36.7182C15.4663 36.1198 12.703 34.6428 10.5342 32.4739C8.36531 30.3051 6.88831 27.5418 6.28993 24.5335C5.69154 21.5253 5.99866 18.4071 7.17242 15.5734C8.34619 12.7397 10.3339 10.3176 12.8842 8.61358C15.4345 6.90953 18.4328 6 21.5 6'
            stroke='#5EDFFF'
            strokeWidth='10.3387'
          />
        </Elipse>
        <Lightning
          viewBox='0 0 23 43'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.7893 40.1807L5.21057 27.6019L17.7893 15.0231L5.21057 2.44437'
            stroke='#E24AD8'
            strokeWidth='6'
          />
        </Lightning>
        <Dots
          viewBox='0 0 33 74'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='6.1613' cy='6.10887' r='5.16935' fill='#FF896C' />
          <circle cx='6.1613' cy='26.7863' r='5.16935' fill='#FF896C' />
          <circle cx='6.1613' cy='47.4637' r='5.16935' fill='#FF896C' />
          <circle cx='6.1613' cy='68.1412' r='5.16935' fill='#FF896C' />
          <circle cx='26.8387' cy='6.10887' r='5.16935' fill='#FF896C' />
          <circle cx='26.8387' cy='26.7863' r='5.16935' fill='#FF896C' />
          <circle cx='26.8387' cy='47.4637' r='5.16935' fill='#FF896C' />
          <circle cx='26.8387' cy='68.1412' r='5.16935' fill='#FF896C' />
        </Dots>
      </Content>
    </Wrapper>
  )
}

export default Header
