import React, { PureComponent } from 'react'
import styled from 'styled-components'

import LogoText from './LogoText'
import logo from '../images/logo.png'

export default class LogoContainer extends PureComponent {
  render() {
    return (
      <LogoContainerStyle>
        <LogoImgStyle src={logo} alt='7 news logo'/>
        <LogoText>Home and Away</LogoText>
      </LogoContainerStyle>
    )
  }
}



const LogoContainerStyle = styled.div`
  display: inline-flex;
  align-items:center;
  position:absolute; 
  background: rgba(25, 25, 25, .5); 
  width:100%;
  height: 35% ;
  bottom: 0; 
  left: 0;
`

const LogoImgStyle = styled.img`
  height: 100%;
`