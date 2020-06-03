import React from 'react'

import { Wrapper, Content, Ellipse, Heart } from './styles'

import Card from './Card/index'

const CardList = () => {
  return (
    <Wrapper>
      <Content>
        <Card
          imgSrc='/goochIcon.png'
          imgAlt='Gooch'
          title='Few Characters'
          text='Don’t worry about character limits.'
        />
        <Card
          imgSrc='/PromoteSharing.svg'
          imgAlt='Gooch'
          title='Promote Sharing'
          text='Give out links that people want to share.'
        />
        <Card
          imgSrc='/Click.svg'
          imgAlt='Gooch'
          title='More Clicks'
          text='Long links are ugly, short ones get clicks'
        />
        <Ellipse
          viewBox='0 0 43 43'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M37.0081 21.5081C37.0081 24.5753 36.0985 27.5736 34.3945 30.1239C32.6904 32.6742 30.2684 34.6619 27.4347 35.8357C24.601 37.0094 21.4828 37.3165 18.4745 36.7182C15.4663 36.1198 12.703 34.6428 10.5342 32.4739C8.36531 30.3051 6.88831 27.5418 6.28993 24.5335C5.69154 21.5253 5.99866 18.4071 7.17242 15.5734C8.34619 12.7397 10.3339 10.3176 12.8842 8.61358C15.4345 6.90953 18.4328 6 21.5 6'
            stroke='rgba(225, 225, 225, 11%)'
            strokeWidth='10.3387'
          />
        </Ellipse>

        <Heart
          viewBox='0 0 35 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M30.4233 4.01613L17.5 16.9395L4.57656 4.01613'
            stroke='rgba(225, 225, 225, 11%)'
            strokeWidth='10.3387'
          />
        </Heart>
      </Content>
    </Wrapper>
  )
}

export default CardList
