import * as React from 'react'
import Layout from '../components/layout'
import Top from '../components/top'
import Profile from '../components/profile'
import Menu from '../components/menu'

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <Menu/>
      </header>
      <main>
        <Top/>
        <Profile/>
      </main>
    </Layout>
  )
}

export default IndexPage
