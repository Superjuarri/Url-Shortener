import React from 'react'

import Layout from '../components/Layout/index'

import Form from '../components/Form/'
import LinkList from '../components/UrlList'

const ShortenerPage = () => {
  return (
    <Layout>
      <h1>Url Shortener</h1>
      <Form />
      <LinkList />
    </Layout>
  )
}

export default ShortenerPage
