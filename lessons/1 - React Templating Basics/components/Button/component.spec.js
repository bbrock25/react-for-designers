import React from 'react'
import { shallow } from 'enzyme'

import Button from './component'

describe('(Button) component', () => {
  describe('with valid text and nothing else', () => {
    const subject = shallow(<Button text="hello"/>)

    it('should have an button', () => {
      const target = subject.find('button')

      expect(target.length).toEqual(1)
    })

    it('it should render the text that we have specified', () => {
      const target = subject.find('button')

      expect(target.text()).toEqual('hello')
    })
  })

  describe('varying our themes', () => {
    it('should accept "default"', () => {
      const subject = shallow(<Button title="hello" theme="default"/>)
      const target = subject.find('button')

      expect(target.length).toEqual(1)
    })

    it('should accept "clear"', () => {
      const subject = shallow(<Button title="hello" theme="clear"/>)
      const target = subject.find('button')

      expect(target.length).toEqual(1)
    })

    it('should accept "outline"', () => {
      const subject = shallow(<Button title="hello" theme="outline"/>)
      const target = subject.find('button')

      expect(target.length).toEqual(1)
    })

    it('should throw an error when we pass an unsupported theme', () => {
      expect(() => {
        const subject = shallow(<Button title="hello" theme="RANDOMTHEME" />)
      }).toThrowError('unsupported theme')
    })
  })
})