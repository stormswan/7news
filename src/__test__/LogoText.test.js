import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LogoText from '../components/LogoText'


test('Shapshot', () => {
  const logoText = renderer.create( <LogoText>Home and Away</LogoText>).toJSON()
  expect(logoText).toMatchSnapshot()
})
