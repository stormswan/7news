import React, { PureComponent } from 'react'

import TitleBackgroundImg from './TitleBackgroundImg'
import LogoContainer from './LogoContainer'

import bgImg from '../images/tile.jpg'


export default class TitleContainer extends PureComponent {
  render() {
    return (
      <div>
        <TitleBackgroundImg src={bgImg}/>
        <LogoContainer/>
      </div>
    )
  }
}
