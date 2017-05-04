import React from 'react'
import { shallow } from 'enzyme'

import ProfileCard from './component'

describe('(Component) ProfileCard', () => {
  describe('default use case, ie: no props', () => {
    xit('throws and error that a name is a required attribute', () => {
      // check out the header component for throwing exceptions when a parameter
      // is undefined
      expect(() => {
        shallow(<ProfileCard />)
      }).toThrowError('name is a required attribute')
    })

    xit('throws and error that a name is a required attribute', () => {
      // check out the header component for throwing exceptions when a parameter
      // is undefined
      expect(() => {
        shallow(<ProfileCard name="Billy Boy"/>)
      }).toThrowError('description is a required attribute')
    })
  })

  describe('with a name and description but no image', () => {
    xit('renders the image that we pass in', () => {
      // take a look at the Button component for how to define default parameters
      const subject = shallow(<ProfileCard name="Billy Boy" description="a guy." />)
      expect(subject.find('img').length).toEqual(1)
    })
  })

  describe('with all props specified', () => {
    xit('renders the image that we pass in', () => {
      const img = 'https://placekitten.com/g/400/400'
      const subject = shallow(
        // pass the props required here in order to make the tests pass
        <ProfileCard />
      )
      expect(subject.find('h1').text()).toEqual('Billy Boy')
      expect(subject.find('p').text()).toEqual('a guy.')
      expect(subject.find('img').equals(<img src={img} />)).toEqual(true)
    })

    xit('renders children when we pass them in', () => {
      // BONUS ROUND: update the ProfileCard to accept and render children
      const subject = shallow(
        <ProfileCard>
          <h3>We have a child!</h3>
        </ProfileCard>
      )
      expect(subject.find('h3').length).toEqual(1)
      expect(subject.find('h3').text()).toEqual('We have a child!')
    })
  })
})