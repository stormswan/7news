import React, { PureComponent } from 'react'
import LogoText from './LogoText'
import logo from '../images/logo.png'

export default class LogoContainer extends PureComponent {
  render() {
    return (
      <div>
        <img src={logo} alt='7 news logo'/>
        <LogoText>Home and Away</LogoText>
      </div>
    )
  }
}
