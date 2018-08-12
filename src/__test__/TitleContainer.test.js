import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import bgImg from '../images/tile.jpg'

import TitleContainer from '../components/TitleContainer'
import LogoContainer from '../components/LogoContainer'
import TitleBackgroundImg from '../components/TitleBackgroundImg'

const  title='Home and Away'

test('Shapshot', () => {
  const titleContainer = renderer.create( <TitleContainer title={title} backgroundImg={bgImg}/>).toJSON()
  expect(titleContainer).toMatchSnapshot()
})


test('should has style position = relative ', () => {
  const titleContainer = renderer.create( <TitleContainer title={title} backgroundImg={bgImg}/>).toJSON()
  expect(titleContainer).toHaveStyleRule('position','relative')
});


test('should show title and image with props ', () => {
  const titleContainer = renderer.create( <TitleContainer title={title} backgroundImg={bgImg}/>).root
  expect(titleContainer.props.title).toBe(title);
  expect(titleContainer.findByType(LogoContainer).props.title).toBe(title);
  expect(titleContainer.findByType(TitleBackgroundImg).props.src).toBe(bgImg);
});