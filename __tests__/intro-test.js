import * as intro from '../intro'

context('Welcome!', () => {
  test('the intro message should match what we are expecting', () => {
    expect(intro.message).toEqual('fix this test and proceed to lesson-1')
  })
})
