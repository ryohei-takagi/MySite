import * as React from 'react'
import styled from 'styled-components'
import {pc, sp, tab} from '../styles/responsive'

const height = document.documentElement.clientHeight

const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: ${height}px;
`

const Profile = () => {
  return (
    <Wrap id="profile">
      PROFILE
    </Wrap>
  )
}

export default Profile
