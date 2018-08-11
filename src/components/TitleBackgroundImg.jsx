import styled from 'styled-components'

const TitleBackgroundImg = styled.img.attrs ({
  src: props => props.src,
})`
  width:100%;
`

export default TitleBackgroundImg