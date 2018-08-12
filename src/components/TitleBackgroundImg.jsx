import styled from 'styled-components'

const TitleBackgroundImg = styled.img.attrs ({
  src: props => props.src,
  alt: props => props.alt || 'title background image',
})`
  width:100%;
`

export default TitleBackgroundImg