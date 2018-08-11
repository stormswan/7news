import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LogoContainer from '../components/LogoContainer'


test('Shapshot', () => {
  const logoContainer = renderer.create( <LogoContainer />).toJSON()
  expect(logoContainer).toMatchSnapshot()
})
