import React, { useContext, useState, useEffect } from 'react'

import fetchUrlData from '../../lib/fetchUrlData'

import { UrlsContext } from '../../contexts/UrlsContext'

import { UrlForm, FormInput, FormButton } from './styles'

const Form = () => {
  const { linksDispatch } = useContext(UrlsContext)
  const [url, setUrl] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const urlData = await fetchUrlData(url)

    if (
      urlData.url == 'Enter a valid URL.' ||
      urlData.url == 'This field may not be blank.'
    ) {
      return
    }

    linksDispatch({ type: 'ADD_URL', url: urlData })

    setUrl('')
  }

  return (
    <UrlForm onSubmit={handleSubmit}>
      <FormInput
        type='text'
        placeholder='Url'
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <FormButton onClick={e => handleSubmit(e)}>Shorten It!</FormButton>
    </UrlForm>
  )
}

export default Form
