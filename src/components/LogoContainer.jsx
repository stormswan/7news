import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LogoText from './LogoText'
import logo from '../images/logo.png'

export default class LogoContainer extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <LogoContainerStyle>
        <LogoImgStyle src={logo} alt='7 news logo'/>
        <LogoText>{this.props.title}</LogoText>
      </LogoContainerStyle>
    )
  }
}



const LogoContainerStyle = styled.div`
  display: inline-flex;
  align-items:center;
  position:absolute; 
  background: rgba(25, 25, 25, .7); 
  width:100%;
  height: 32% ;
  bottom: 3px; 
  left: 0px;
`

const LogoImgStyle = styled.img`
  height: 70%;
`