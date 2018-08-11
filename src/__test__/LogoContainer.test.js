import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LogoContainer from '../components/LogoContainer'
import LogoText from '../components/LogoText'

test('Shapshot', () => {
  const logoContainer = renderer.create( <LogoContainer />).toJSON()
  expect(logoContainer).toMatchSnapshot()
})


test('should has expected styles', () => {
  const logoContainer = renderer.create( <LogoContainer/>).toJSON()
  expect(logoContainer).toHaveStyleRule('display','inline-flex')
  expect(logoContainer).toHaveStyleRule('align-items','center')
  expect(logoContainer).toHaveStyleRule('position','absolute')
  expect(logoContainer).toHaveStyleRule('background',"rgba(25, 25, 25, .5)".replace(/ /g, ''))
  expect(logoContainer).toHaveStyleRule('width','100%')
  expect(logoContainer).toHaveStyleRule('height','35%')
  expect(logoContainer).toHaveStyleRule('bottom','0')
  expect(logoContainer).toHaveStyleRule('left','0')
});


test('should work with props value', () => {
  const alt= '7 news logo'
  const src = 'logo.png';
  const title = 'Home and Away'
  const logoContainer = renderer.create( <LogoContainer />).root

  expect(logoContainer.findByType('img').props.alt).toBe(alt);
  expect(logoContainer.findByType('img').props.src).toBe(src);
  expect(logoContainer.findByType(LogoText).props.children).toBe(title);
});