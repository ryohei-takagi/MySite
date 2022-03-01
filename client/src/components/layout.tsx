import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: -apple-system, Roboto, sans-serif, serif;
    background-color: #F5F5F5;
    font-size: 62.5%;
  }
`

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}

export default Layout
