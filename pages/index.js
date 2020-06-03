import React, { useContext } from 'react'

import Layout from '../components/Layout/index'

import Header from '../components/Index Page/Header/'
import CardList from '../components/Index Page/CardSection'
import AboutSection from '../components/Index Page/AboutSection'
import ApiSection from '../components/Index Page/ApiSection'

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <CardList />
      <AboutSection />
      <ApiSection />
    </Layout>
  )
}

export default IndexPage
