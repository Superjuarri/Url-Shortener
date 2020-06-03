import React, { useEffect, useContext } from 'react'

import { UrlsContext } from '../../contexts/UrlsContext'

import UrlListItem from './UrlListItem'
import { Wrapper } from './styles'

const LinksList = () => {
  const { links, linksDispatch } = useContext(UrlsContext)

  return (
    <Wrapper>
      {links.length !== 0 ? (
        links.map(link => <UrlListItem key={link.hashid} link={link} />)
      ) : (
        <p>No urls here!</p>
      )}
    </Wrapper>
  )
}

export default LinksList
