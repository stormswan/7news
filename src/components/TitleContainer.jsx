import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TitleBackgroundImg from './TitleBackgroundImg'
import LogoContainer from './LogoContainer'

import bgImg from '../images/tile.jpg'


export default class TitleContainer extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <TitleContainerStyle>
        <TitleBackgroundImg src={bgImg}/>
        <LogoContainer title={this.props.title}/>
      </TitleContainerStyle>
    )
  }
}



const TitleContainerStyle = styled.div`
  position:relative;
`