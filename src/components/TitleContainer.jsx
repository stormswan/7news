import React, { PureComponent } from 'react'
import styled from 'styled-components'

import TitleBackgroundImg from './TitleBackgroundImg'
import LogoContainer from './LogoContainer'

import bgImg from '../images/tile.jpg'


export default class TitleContainer extends PureComponent {
  render() {
    return (
      <TitleContainerStyle>
        <TitleBackgroundImg src={bgImg}/>
        <LogoContainer/>
      </TitleContainerStyle>
    )
  }
}



const TitleContainerStyle = styled.div`
  position:relative;
`