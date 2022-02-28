import * as React from 'react'
import styled from 'styled-components'
import {pc, sp, tab} from '../styles/responsive'

const height = document.documentElement.clientHeight

const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: ${height}px;
`

const H1 = styled.h1`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  font-weight: bold;
  
  ${sp`
    height: 70px;
    line-height: 70px;
    bottom: 70px;
    font-size: 7em;
  `}
  ${tab`
    height: 100px;
    line-height: 100px;
    bottom: 100px;
    font-size: 10em;
  `}
  ${pc`
    height: 100px;
    line-height: 100px;
    bottom: 0;
    font-size: 10em;
  `}
`

const FirstName = styled.span`
  ${sp`
    display: block;
  `}
  ${tab`
    display: block;
  `}
  ${pc`
    margin: 0 15px;
  `}
`

const LastName = styled.span`
  ${sp`
    display: block;
  `}
  ${tab`
    display: block;
  `}
  ${pc`
    margin: 0 15px;
  `}
`

const H2 = styled.h2`
  position: absolute;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  font-weight: thin;
  
  ${sp`
    top: 177px;
    height: 17px;
    line-height: 17px;
    font-size: 1.7em;
  `}
  ${tab`
    top: 245px;
    height: 25px;
    line-height: 25px;
    font-size: 2.5em;
  `}
  ${pc`
    top: 145px;
    height: 25px;
    line-height: 25px;
    font-size: 2.5em;
  `}
`

const SubTitle = styled.div`
`

const Top = () => {
  return (
    <Wrap>
      <H1>
        <FirstName>RYOHEI</FirstName>
        <LastName>TAKAGI</LastName>
      </H1>
      <H2>
        <SubTitle>DevOps Engineer & Architect</SubTitle>
      </H2>
    </Wrap>
  )
}

export default Top
