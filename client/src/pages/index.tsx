import * as React from 'react'
import Layout from '../components/layout'
import Menu from '../components/menu'
import Top from '../components/top'
import Profile from '../components/profile'
import Skill from '../components/skill'

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <Menu/>
      </header>
      <main>
        <Top/>
        <Profile/>
        <Skill/>
      </main>
    </Layout>
  )
}

export default IndexPage
