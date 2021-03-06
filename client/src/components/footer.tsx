import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  position: relative;
`

const Text = styled.div`
  text-align: center;
  padding: 15px;
  font-size: 1.25em;
  color: #454545;
`

const Footer = () => {
  return (
    <Wrap>
      <Text>
        &copy; 2022 ryohei-takagi
      </Text>
    </Wrap>
  )
}

export default Footer
