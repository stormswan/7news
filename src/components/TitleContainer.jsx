import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TitleBackgroundImg from './TitleBackgroundImg'
import LogoContainer from './LogoContainer'

export default class TitleContainer extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
  }

  render() {
    return (
      <TitleContainerStyle>
        <TitleBackgroundImg src={this.props.backgroundImg}/>
        <LogoContainer title={this.props.title}/>
      </TitleContainerStyle>
    )
  }
}



const TitleContainerStyle = styled.div`
  position:relative;
`