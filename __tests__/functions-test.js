/*
 * Functions: the bread and butter of javascript
 */

context('Putting the fun in functions', () => {
  /*
   * for the sake of these exercises, we are going to be using es6 arrow
   * functions rather than traditional javascript functions. I find that they
   * are a bit easier to reason about when just getting started
   */

  describe('just like algebra!', () => {
    /*
     * remember algebra, when you wrote functions that did math? I'd recon to
     * bet you remember this guy:
     *
     * y = m*x + b
     *
     * we call that the point slope form of a line. Where m is the slope and b
     * denotes where the line crosses the y-axis. So if we had a line with
     * a slope of 2 and a y intercept of 3 our equation would look like the
     * following:
     *
     * y = 2*x + 3
     *
     * once we have this, we can easily calculate the y-coodinate for any point
     * x on this line by simply substituting x with a real number. So at x = 2,
     * we find that
     *
     * y = 2*2 + 3 = 7
     *
     * you could say here that y "is a function of x". So, lets write it like
     * that
     *
     * f(x) = 2*x + 3
     *
     * and using our new function:
     *
     * f(1) = 2*1 + 3 = 5
     * f(2) = 2*2 + 3 = 7
     * f(3) = 2*3 + 3 = 9
     *
     * forgive me for the algebra refresher, but this is EXACTLY the type of
     * stuff we do all day in javascript. We write functions!
     *
     * They might be a bit intimidating at first, but really, they are just the
     * same as the algebra that we were all doing back in school.
     *
     * Lets rewrite our function f in javascript. We have two options:
     *
     * function f(x) { return 2*x + 3 }
     *
     * const f = (x) => 2*x + 3
     *
     * and we can use this the exact same
     *
     * f(1) = 5
     * f(2) = 7
     * f(3) = 9
     *
     * EXERCISE:
     * ===
     * given that you have a line that has a slope of 3 and a y intercept of
     * 2, write a funtion that computes y for any given x.
     *
     * hint: y = f(x) = 3*x + 2
     *
     * I'll get you started with the function, your job is to 'fix' it so that
     * the tests will pass
     */

    const f = (x) => x + 2 // fix this line!

    xit("at x = 1, y should equal 5", () => {
      expect(f(1)).toEqual(5)
    })

    xit("at x = 2, y should equal 8", () => {
      expect(f(2)).toEqual(8)
    })

    xit("at x = 3, y should equal 11", () => {
      expect(f(3)).toEqual(11)
    })
  })

  context('functions that work with strings', () => {
    /*
     * a neat thing about javascript is that its 'dynamically typed'. that means
     * that we can pass whatever we want to functions, either a number, string,
     * array, object or even nothing at all; its up to us as the programmer to
     * handle the various cases.
     *
     * lets write a function that will take in a string and return a different
     * string. Here's an example:
     *
     * const g = (s) => s + " " + s
     *
     * this function takes in a string and returns that same string repeated
     * twice seperated by a space. so using this we'll get the following results
     *
     * g('babar') = 'babar babar'
     * g('spartan') = 'spartan spartan'
     * g('bear') = 'bear bear'
     *
     * EXERCISE:
     * ===
     * Lets write our own function formatName, that takes in a first and
     * last name and returns them in reverse order seperated by a string.
     *
     * I've gotten you started here, but there is a bug in the function. Modify
     * the function 'g' so that the corresponding tests pass.
     */

    const g = (first, last) => first + last // fix this line!

    xit('bill brock becomes "brock, bill"', () => {
      expect(g('bill', 'brock')).toEqual('brock, bill')
    })

    xit('randy brock becomes "brock, randy"', () => {
      expect(g('randy', 'brock')).toEqual('brock, randy')
    })

    xit('richie brock becomes "brock, richie"', () => {
      expect(g('richie', 'brock')).toEqual('brock, richie')
    })
  })

  describe('functions that take a string but return a number', () => {
    /*
     * here we're going to do something a bit more creative. In javascript, you
     * can tell the length of a string by calling the .length property on it. So
     * consider the folowing string:
     *
     * "hello"
     *
     * if you wanted to know the length of that string, you would simply call:
     *
     * "hello".length // => 5
     *
     * similarly you can call .length on other strings like so
     *
     * "goodbye".length   // => 7
     * "thriving".length  // => 8
     *
     * also, you can assign a sring to a variable and call .length on that
     * variable:
     *
     * const someString = "hello"
     *
     * someString.length  // => 5
     *
     * EXERCISE:
     * ===
     * Do you think that you could write a function to return the length of a
     * string? I'll get you started
     */

    const getStringLength = (s) => "_".length // fix this line!

    xit('calculates the length of "hi"', () => {
      expect(getStringLength('hi')).toEqual(2)
    })
    xit('calculates the length of "hello"', () => {
      expect(getStringLength('hello')).toEqual(5)
    })
    xit('calculates the length of "javascript"', () => {
      expect(getStringLength('javascript')).toEqual(10)
    })
  })

  describe('working with functions and arrays', () => {
    context('applying a function accross an array with map', () => {
      /*
       * remember the .length function on a string, well there are many similar
       * functions that are available to different data types in javascript. one
       * of the most commonly used ones in UI programming is a map.
       *
       * the map function lives on every array and can be called like so:
       *
       * [1, 2, 3].map(f)
       *
       * the big difference here is that map takes a function as an argument and
       * applies that function to every element in that array, and returns a new
       * array.
       *
       * so, say we had a function addOne that did nothing but add the value 1
       * to a number:
       *
       * const addTen = (x) => x + 1
       *
       * if we applied addTen to an array using a map, it would return a new
       * array, with every entry in that array having 10 added to it. So, here
       * it is
       *
       * const addTen = (x) => x + 10
       *
       * [1, 2, 3].map(addTen)  // => [11, 12, 13]
       *
       * and again:
       *
       * const targetArray = [1, 2, 3, 4, 5]
       *
       * targetArray.map(addTen) // => [10, 20, 30, 40, 50]
       *
       * EXERCISE:
       * ===
       * Write a function that will add an exclamation point to the end of a
       * string.
       */

      const exclaim = (s) => s + '?' // fix this line!

      const target = ['hi', 'bye', 'why']

      // first we test that we've got our function right
      xit('exclaim makes life a bit more dramatic', () => {
        expect(exclaim('hi')).toEqual('hi!')
      })

      /*
       * now, apply the exclaim function to the target using a map, as in the
       * examples above
       */
      xit('a mapped exclaim makes all the entries a bit louder', () => {
        expect(target.map(exclaim)).toEqual(['hi!', 'bye!', 'why!'])
      })
    })
  })

  describe('multi-line functions', () => {
    /*
     * the function syntax that we have been using up until now is called and
     * es6 arrow function with an 'implicit' return. what that means is that the
     * function returns the expression that is immediately after the 'arrow'
     *
     * const f = () => 'hi'
     * const g = (name) => 'hello ' + name
     *
     * both of the functions above, while readable, are somewhat limited in
     * their extensibility. if we wanted to include any logic in that function,
     * or say, interact with another api, or do anything that required more than
     * one line of text, it would be difficult to accomplish in the 'implicit'
     * form.
     *
     * for these situations, javascript has what is called a function body,
     * denoted by curly braces '{' and '}' allong with a return statement.
     *
     * The two example functions can be rewritten using a function body and
     * 'explicit' returns as so:
     *
     * const f = () => {
     *   return 'hi'
     * }
     *
     * const g = (name) => {
     *   return 'hello ' + name
     * }
     *
     * while this form is slightly more verbose, it affords us a bit more of a
     * room for performing our calculations.
     *
     * EXERCISE:
     * ===
     * update the folloiwng function to return the following string for any
     * given word.
     *
     * "the length of 'INPUT_STRING' is LENTGH characters."
     */

    const h = (input) => {
      const length = input.length
      // fix this function body to make the following specs pass
      return ""
    }

    xit('handles "bill" correctly', () => {
      expect(h('bill')).toEqual("the length of 'bill' is 4 characters.")
    })

    xit('handles "robert" correctly', () => {
      expect(h('robert')).toEqual("the length of 'robert' is 6 characters.")
    })

    xit('handles "" correctly', () => {
      expect(h('')).toEqual("the length of '' is 0 characters.")
    })
  })
  /*
   * That's it for now with functions, great work!
   */
})
