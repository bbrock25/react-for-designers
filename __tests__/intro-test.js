import * as intro from '../intro'

context('Welcome!', () => {
  // here is our first test, the fist bit here describes the test. jest (our
  // test runner) looks for these test blocks and runs them accordingly
  xit('is a real gimme', () => {
    // and our first expectation!
    // fix this by changing false to be true
    expect(false).toEqual(true)
  })

  xit('the intro message should match what we are expecting', () => {
    // this expectation loads in a message from the import above and compares it
    // to something that we define. Fix this test by updating the
    // message in the intro module to match our expectation
    expect(intro.message).toEqual('please fix me!')
  })
})
