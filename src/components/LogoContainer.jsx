import React, { PureComponent } from 'react'
import styled from 'styled-components'

import LogoText from './LogoText'
import logo from '../images/logo.png'

export default class LogoContainer extends PureComponent {
  render() {
    return (
      <LogoContainerStyle>
        <img src={logo} alt='7 news logo'/>
        <LogoText>Home and Away</LogoText>
      </LogoContainerStyle>
    )
  }
}



const LogoContainerStyle = styled.div`
  display: inline-flex;
  position:absolute; 
  width:100%;
  height: 35% ;
  bottom: 0; 
  left: 0;
`