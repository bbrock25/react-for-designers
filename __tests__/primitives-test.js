/*
* Testing Introduction:
*
* Here we will be using Jest as our test utility, you can find extensive
* documentation here: https://facebook.github.io/jest/
*
* There are a few imporant pieces that you will need to be familiar with.
* First off, you'll see us using these words quite frequently:
*  * context
*  * describe
*  * it
*  * xit
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
* We'll be starting simple with our tests and using primarily the following
* functions for assertions:
*
* expect: https://facebook.github.io/jest/docs/api.html#expectvalue
* toEqual: https://facebook.github.io/jest/docs/api.html#toequalvalue
* toBeTruthy: https://facebook.github.io/jest/docs/api.html#tobetruthy
* toBeFalsy: https://facebook.github.io/jest/docs/api.html#tobefalsy
*
* Last bit, tests marked with `xit` are pending and will not be run by jest.
* When you work these next tests, update the `xit` to be just `it` in order
* to run the test block. For this spec to be completed, all tests must be
* passing with 0 pending tests remaining.
*
* This exercise is to demonstrate some important properties of javascript
* primitives. Many of the tests are already passing, just update each spec
* to not be pending. For those that are not passing, look for a comment
* indicating where the bug might be.
*
* Please take care to study each of these examples as the lessons that
* follow will certainly build on what we learn here.
*/

describe('JavaScript Primitives', () => {
  describe('booleans', () => {
    context('when evaluating for true', () => {
      xit('true is true', () => {
        const value = false // fix me!

        expect(value).toEqual(true)
      })

      xit('calculated true is true', () => {
        const seven = 7
        const sevenEqualsFourPlusThree = seven === (4 + 4) // fix me!

        expect(sevenEqualsFourPlusThree).toEqual(true)
      })
    })

    context('when evaluating for false', () => {
      xit('false is false', () => {
        const value = true // fix me!

        expect(value).toEqual(false)
      })

      xit('calculated false is false', () => {
        const seven = 7
        const sevenDoesNotEqualFourPlusFour = (seven === (4 + 3)) // fix me!

        expect(sevenDoesNotEqualFourPlusFour).toBe(false)
      })
    })

    context('the notion of truthy and falsey', () => {
      xit('is truthy for all things that are truthy', () => {
        /* what does it mean for something to be truthy?
         *
         * it means that when evaulated as a boolean, it will evaluate true. For
         * instance, say that the value X is truthy
         *
         * const X = 'something truthy'
         *
         * if (X) {
         *  console.log('this will run')
         * } else {
         *  console.log('this will never run')
         * }
         *
         * running the above code, we will see the first statment logged to the
         * console. the following are examples that are evaluated as truthy
         */

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
        expect([1, 2, 3]).toBeTruthy()

        // objects, even if they're empty
        expect({}).toBeTruthy()
        expect({ foo: 'bar' }).toBeTruthy()

        // the value true
        expect(true).toBeTruthy()
      })

      xit('is falsey for all the things that are falsey', () => {
        /* what does it mean for something to be falsy?
         *
         * it means that when evaulated as a boolean, it will evaluate true. For
         * instance, say that the value Y is falsy
         *
         * const Y = 'something falsy'
         *
         * if (Y) {
         *  console.log('this will never run')
         * } else {
         *  console.log('this will never run')
         * }
         *
         * running the above code, we will see the second statment logged to the
         * console. the following are examples that are evaluated as falsy
         */

        // empty strings
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
      /*
       * numbers are pretty straight forward, so lets look at a few math
       * functions to make this more interesting
       */
      xit('has the number 7 assigned to the variable seven', () => {
        const seven = 8 // fix me!

        expect(seven).toEqual(7)
      })

      xit('Math.floor will round down a number', () => {
        const eightAndChange = 8.17

        const floor = Math.floor(eightAndChange)
        const expected = undefined // fix me

        expect(floor).toEqual(expected)
      })

      xit('Math.ceil will round up a number', () => {
        const eightAndChange = 8.17

        const ceil = Math.ceil(eightAndChange)
        const expected = undefined // fix me

        expect(ceil).toEqual(expected)
      })

      xit('the modulus operator "%" will return a remainder', () => {
        const little = 3
        const big = 5

        const expected = undefined // fix me

        expect(big % little).toEqual(expected)
      })

      xit('the modulus operator "%" will return a what if a number is evenly divisible', () => {
        const expected = undefined // fix me

        expect(4 % 2).toEqual(expected)
        expect(6 % 2).toEqual(expected)
        expect(8 % 2).toEqual(expected)
        expect(expected % 2).toEqual(expected)
      })
    })
  })

  describe('strings', () => {
    context('length', () => {
      xit('has a length of 0 when a string is empty', () => {
        const sillyString = ''

        const stringLen = undefined // fix me

        expect(stringLen).toEqual(0)
      })

      xit('has a length of 3 with a string "abc"', () => {
        // update the variable 'length' to be the 'length' property on
        // sillyString
        const sillyString = 'abc'

        const stringLen = undefined // fix me

        expect(stringLen).toEqual(3)
      })
    })

    context('string slice', () => {
      /*
       * take a look at the string slice method that can be used to return
       * portions of a string:
       *
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
       */
      const sample = 'this is the day'

      xit('playing with substrings #1', () => {
        const begin = 0 // fix me
        const end = 0   // fix me

        expect(sample.slice(begin, end)).toEqual('t')
      })

      xit('playing with substrings #2', () => {
        const begin = 0 // fix me
        const end = 0   // fix me

        expect(sample.slice(begin, end)).toEqual('this')
      })

      xit('playing with substrings #3', () => {
        const begin = 0 // fix me
        const end = 0   // fix me

        expect(sample.slice(begin, end)).toEqual(' the ')
      })
    })

    /* there are lots of other methods on any given string, take a look at the
     * docs:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
     */
  })
})
