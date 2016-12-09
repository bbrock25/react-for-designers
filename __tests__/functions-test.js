/*
 * Functions: the bread and butter of javascript
 */

context('Putting the fun in functions', () => {
  describe('a simple function', () => {
    it('returns a value', () => {
      function gimmeTwo() {
        // update this function so that it returns the value 2 in order to make
        // these specs pass
        return 1
      }

      expect(gimmeTwo()).toEqual(2)
    })

    it('accepts a value and returns a value', () => {
      function addTwo(x) {
        // update this function so that it returns the value of whatever we pass
        // in added to 2.
        return x
      }

      expect(addTwo(2)).toEqual(4)
    })

    it('can return a fuction from a fucntion', () => {
      function quack () {
        return 'quack'
      }

      function generateQuacker() {
        return quack
      }

      const returnedFunction = generateQuacker()

      // call the returned function in the expectation to get this to pass
      expect().toEqual('quack')
    })

    /* this last expectation demonstrates an important point, that functions can
     * be passed around without calling them. You will see this a LOT in react
     * land when we are mapping over items and creating lists of results.
     */
    describe('arrays', () => {
      context('indexing', () => {
        it('has zero based indexing', () => {
          const target = [1,2,3]

          /* access the values in an array using the bracket notation the first
           * entry in an array is always at the 0'th position so for the above
           * array:
           *
           * target[0] is 1
           * target[1] is 2
           * target[2] is 3
           */

          // fix these expectations
          expect().toEqual(0)
          expect().toEqual(1)
          expect().toEqual(2)
        })
      })

      context('map', () => {
        it('returns a copy of the array if we don\'t do any tranformations', () => {
          const target = [1, 2, 3]

          function returnMyselfPlusOne(x) {
            return x + 1
          }

          /*
           * map returns a new array that was caclulated from the previous array
           *
           * so, using the above target and the defined function:
           * returnMyselfPlusOne, we can create a new array using the map
           * fuction.
           *
           * target.map(returnMyselfPlusOne) will return [2, 3, 4]
           *
           * create a new function, myselfMinusOne that will return a new array,
           * where we subtract 1 from each entry in the original array
           */

          function myselfMinusOne(x) {
            // return ?
          }


          expect(target.map(myselfMinusOne)).toEqual([0, 1, 2])
        })

        it('can compute the lenght of a string', () => {
          /*
           * what if our target was an array of strings, could we create a
           * function that
           */
          function getStringLength(s) {
            // return ?
          }
          expect(getStringLength('hello')).toEqual(5)
        })

        it('can count the lenght of the strings in an array', () => {
          /*
           * given that previous example, can we apply that to a map and get the
           * lengths of all the strings in an array added to a new arary?
           */

          function getStringLength(s) {
            // return ?
          }

          const target = ['a', 'bb', 'ccc', 'dddd']

          expect(target.map(getStringLength)).toEqual([1, 2, 3, 4])
        })
      })
    })
  })
})
