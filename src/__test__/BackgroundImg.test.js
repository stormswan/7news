import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TitleBackgroundImg from '../components/TitleBackgroundImg'



test('Shapshot', () => {
  const titleBgImg = renderer.create( <TitleBackgroundImg/>).toJSON()
  expect(titleBgImg).toMatchSnapshot()
})

