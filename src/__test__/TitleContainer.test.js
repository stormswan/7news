import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TitleContainer from '../components/TitleContainer'


test('Shapshot', () => {
  const titleContainer = renderer.create( <TitleContainer />).toJSON()
  expect(titleContainer).toMatchSnapshot()
})


test('should has style position = relative ', () => {
  const titleContainer = renderer.create( <TitleContainer />).toJSON()
  expect(titleContainer).toHaveStyleRule('position','relative')
});