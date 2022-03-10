import * as React from 'react'
import Layout from '../components/layout'
import Menu from '../components/menu'
import Top from '../components/top'
import Profile from '../components/profile'
import Skill from '../components/skill'
import Contact from '../components/contact'
import Footer from '../components/footer'

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
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Layout>
  )
}

export default IndexPage
