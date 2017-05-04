import React from 'react'
import { shallow } from 'enzyme'

import Header from './component'

describe('(Header) component', () => {
  describe('with a valid title and nothing else', () => {
    const subject = shallow(<Header title="hello"/>)

    it('should have an h1', () => {
      const target = subject.find('h1')

      expect(target.length).toEqual(1)
    })

    it('it should render the title we passed in', () => {
      const target = subject.find('h1')

      expect(target.text()).toEqual('hello')
    })
  })

  describe('varying the title prirority', () => {
    it('should render an h1', () => {
      const subject = shallow(<Header title="hello" priority="h1" />)
      const target = subject.find('h1')

      expect(target.length).toEqual(1)
    })

    it('should render an h2', () => {
      const subject = shallow(<Header title="hello" priority="h2" />)
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
    })

    it('should render an h3', () => {
      const subject = shallow(<Header title="hello" priority="h3" />)
      const target = subject.find('h3')

      expect(target.length).toEqual(1)
    })

    it('should render an h4', () => {
      const subject = shallow(<Header title="hello" priority="h4" />)
      const target = subject.find('h4')

      expect(target.length).toEqual(1)
    })

    it('should render an h5', () => {
      const subject = shallow(<Header title="hello" priority="h5" />)
      const target = subject.find('h5')

      expect(target.length).toEqual(1)
    })

    it('should NOT render a p', () => {
      expect(() => {
        const subject = shallow(<Header title="hello" priority="p" />)
      }).toThrowError('invalid priority')
    })

    it('should NOT render something random and stupid', () => {
      expect(() => {
        const subject = shallow(<Header title="hello" priority="BAR" />)
      }).toThrowError('invalid priority')
    })
  })
})