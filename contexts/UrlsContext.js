import React, { useReducer, useEffect, createContext } from 'react'
import { urlsReducer } from '../reducers/UrlsReducer'

export const UrlsContext = createContext()

const UrlsContextProvider = ({ children }) => {
  const [urls, urlsDispatch] = useReducer(urlsReducer, [])

  useEffect(() => {
    const data = localStorage.getItem('urls')
    if (data) {
      urlsDispatch({ type: 'SET_URLS', urls: JSON.parse(data) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('urls', JSON.stringify(urls))
  })

  return (
    <UrlsContext.Provider value={{ links: urls, linksDispatch: urlsDispatch }}>
      {children}
    </UrlsContext.Provider>
  )
}

export default UrlsContextProvider
