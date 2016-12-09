  /*
   * Testing Introduction:
   *
   * Here we will be using Jest as our test utility, you can find extensive
   * documentation here: https://facebook.github.io/jest/
   *
   * There are a few imporant pieces that you will need to be familiar with.
   * First off, you'll see us using three words quite frequently:
   *  * context
   *  * describe
   *  * it
   *
   * context and describe are often used interchangeably, they provide textual
   * descriptions of the tests within their region. For example, when testing
   * the behavior for a Header react component, we might "describe" the test
   * group as "Header Component" and then a related "context" could be the
   * following  "Using the default Props:"
   *
   * run this test suite by running the following command:
   *    'npm test -- primitives'
   *
   * Notice that when the test fails, you can see the description, context, and
   * test dialogues. repair the test by setting variable seven to the value that
   * we are expecting and run the test again. Once that test is passing, move
   * onto the next failure in this file.
   *
   *
   * We'll be starting simple with our tests and using primarily the following
   * functions for assertions:
   *
   * expect: https://facebook.github.io/jest/docs/api.html#expectvalue
   * toEqual: https://facebook.github.io/jest/docs/api.html#toequalvalue
   * toBeTruthy: https://facebook.github.io/jest/docs/api.html#tobetruthy
   * toBeFalsy: https://facebook.github.io/jest/docs/api.html#tobefalsy
   *
   * Last bit, tests marked with `xit` are pending and will not be run by jest.
   * When you work these next tests, update the `it` to be just `it` in order
   * to run the test block. For this spec to be completed, all tests must be
   * passing with 0 pending tests remaining.
   *
   * This exercise is to demonstrate some important properties of javascript
   * primitives. Most of the tests are already passing, just update each spec
   * to not be pending. Please pay attention though, you'll use the information
   * learned here in subsequent exercises.
   */

describe('JavaScript Primitives', () => {
  describe('booleans', () => {
    context('when evaluating for true', () => {
      xit('true is true', () => {
        const value = false

        expect(value).toEqual(true)
      })

      xit('calculated true is true', () => {
        const sevenEqualsFourPlusThree = 7 === (4 + 4)

        expect(sevenEqualsFourPlusThree).toEqual(true)
      })
    })

    context('when evaluating for false', () => {
      xit('false is false', () => {
        const value = true

        expect(value).toEqual(false)
      })

      xit('calculated false is false', () => {
        const sevenDoesNotEqualFourPlusFour = (7 === (4 + 3))

        expect(sevenDoesNotEqualFourPlusFour).toBe(false)
      })
    })

    context('the notion of truthy and falsey', () => {
      xit('is truthy for all things that are truthy', () => {
        // non-empty strings
        expect('asdf').toBeTruthy()

        // non-zero positive numbers
        expect(1).toBeTruthy()
        expect(1.1).toBeTruthy()
        expect(100000).toBeTruthy()

        // non-zero negative numbers
        expect(-1).toBeTruthy()
        expect(-1.1).toBeTruthy()
        expect(-100000).toBeTruthy()

        // arrays, even if they're empty
        expect([]).toBeTruthy()
        expect([1,2,3]).toBeTruthy()

        // objects, even if they're empty
        expect({}).toBeTruthy()
        expect({ foo: 'bar' }).toBeTruthy()

        // the value true
        expect(true).toBeTruthy()
      })

      xit('is falsey for all the things that are falsey', () => {
        // empty strings are falsey
        expect('').toBeFalsy()

        // the number 0
        expect(0).toBeFalsy()
        expect(0.0).toBeFalsy()

        // undefined
        expect(undefined).toBeFalsy()

        // false
        expect(false).toBeFalsy()
      })
    })
  })

  describe('numbers', () => {
    context('setting a number to a variable', () => {
      xit('has the number 7 assigned to the variable seven', () => {
        const seven = 8

        expect(seven).toEqual(7)
      })

      xit('is evaluates truthy when non-zero', () => {
        expect(-1).toBeTruthy()
        expect(-1.1).toBeTruthy()
        expect(-100000).toBeTruthy()

        expect(1).toBeTruthy()
        expect(1.1).toBeTruthy()
        expect(100000).toBeTruthy()
      })

      xit('is evaluates falsey for the number 0', () => {
        const zero = 0

        expect(zero).toBeFalsy()
      })
    })
  })

  describe('strings', () => {
    context('length', () => {
      xit('has a length of 0 when a string is empty', () => {
        // update the variable 'length' to be the 'length' property on
        // sillyString
        const sillyString = ''
        const stringLen = 9999

        expect(sillyString.length).toEqual(0)
      })

      xit('has a length of 3 with a string "abc"', () => {
        // update the variable 'length' to be the 'length' property on
        // sillyString
        const sillyString = 'abc'
        const stringLen = 9999

        expect(sillyString.length).toEqual(3)
      })

      context('truthy & falsey', () => {
        xit('non-empty strings evaluate to be truthy', () => {
          const nonEmptyString = 'asdf'
          let value

          if (nonEmptyString) {
            value = true
          } else {
            value = false
          }

          expect(nonEmptyString).toBeTruthy()
          expect(value).toEqual(true)
        })

        xit('empty strings evaluate to be falsey', () => {
          const emptyString = ''
          let value

          if (emptyString) {
            value = true
          } else {
            value = false
          }

          expect(emptyString).toBeFalsy()
          expect(value).toBe(false)
        })
      })
    })
  })
})
