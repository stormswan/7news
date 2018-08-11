import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TitleContainer from '../components/TitleContainer'
import LogoContainer from '../components/LogoContainer'

const  title='Home and Away'

test('Shapshot', () => {
  const titleContainer = renderer.create( <TitleContainer title={title}/>).toJSON()
  expect(titleContainer).toMatchSnapshot()
})


test('should has style position = relative ', () => {
  const titleContainer = renderer.create( <TitleContainer title={title}/>).toJSON()
  expect(titleContainer).toHaveStyleRule('position','relative')
});


test('should show title with props ', () => {
  const titleContainer = renderer.create( <TitleContainer title={title}/>).root
  expect(titleContainer.props.title).toBe(title);
  expect(titleContainer.findByType(LogoContainer).props.title).toBe(title);
});