import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LogoText from '../components/LogoText'


test('Shapshot', () => {
  const logoText = renderer.create( <LogoText>Home and Away</LogoText>).toJSON()
  expect(logoText).toMatchSnapshot()
})

test('should change font size at differnet screen size', () => {
  const logoText = renderer.create( <LogoText>Home and Away</LogoText>).toJSON()
  expect(logoText).toHaveStyleRule('font-size', '4em', {
    media: '(min-width: 992px)'
  })

  expect(logoText).toHaveStyleRule('font-size', '5em', {
    media: '(min-width: 1200px)'
  })

  expect(logoText).toHaveStyleRule('font-size', '1.8em', {
    media: '(max-width: 576px)'
  })
});


test('should work with default value', () => {
  const logoText = renderer.create( <LogoText>Home and Away</LogoText>).toJSON()
  expect(logoText).toHaveStyleRule('color','white')
  expect(logoText).toHaveStyleRule('font-size','3em')
  expect(logoText).toHaveStyleRule('margin-left','0.85em')
});

test('should work with props value', () => {
  const color = 'green'
  const size ='2em'
  const logoText = renderer.create( <LogoText color={color} size={size}>Home and Away</LogoText>).toJSON()
  expect(logoText).toHaveStyleRule('color',color)
  expect(logoText).toHaveStyleRule('font-size',size)
});