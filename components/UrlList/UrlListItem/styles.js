import styled from 'styled-components'

export const LinkItem = styled.li`
  justify-self: center;
  width: 100%;
  max-width: 800px;
  height: 100%;

  padding: 0.75rem 1.25rem;

  display: flex;
  align-items: center;

  background-color: #f5f5f5;
  border-radius: 2px;
`

export const LinkUrl = styled.p`
  padding-right: 60px;

  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
`

export const ShortenedLink = styled.a`
  white-space: nowrap;
`

export const CopyIcon = styled.svg`
  position: relative;

  margin-left: 15px;
`
