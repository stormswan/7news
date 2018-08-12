import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TitleBackgroundImg from '../components/TitleBackgroundImg'



test('Shapshot', () => {
  const titleBgImg = renderer.create( <TitleBackgroundImg/>).toJSON()
  expect(titleBgImg).toMatchSnapshot()
})


test('should work with default value', () => {
  const backgroundImg = renderer.create( <TitleBackgroundImg/>).toJSON()
  expect(backgroundImg).toHaveStyleRule('width','100%')
  expect(backgroundImg.props.alt).toBe('title background image')
})

test('should work with props value', () => {
  const alt= 'background'
  const src = '../images/tile.jpg'
  const backgroundImg = renderer.create( <TitleBackgroundImg alt={alt} src={src}/>).toJSON()
  expect(backgroundImg.props.alt).toBe(alt)
  expect(backgroundImg.props.src).toBe(src)
})