/*
  * JavaScript Objects are, at their simplest, key value stores. You define an
  * object like so
  *
  * const store = {}
  *
  * If you've written much javascript at all, you've certainly seen a few of
  * these floating around. Say that we want to store a bunch of information
  * about a given user in an Object:
  *
  * const user = {
  *   email: 'bill@email.com',
  *   age: 17,
  *   sex: 'male',
  *   phone: '444-555-6677',
  *   firstName: 'bill'
  * }
  *
  * we can then access the properties of this object using either 'dot'
  * notation or indexing into that object with a string.
  *
  * user.email    // => 'bill@email.com'
  * user['email'] // => 'bill@email.com'
  *
  * we can also add new properties to the object with that same notation
  *
  * user.lastName = 'brock'
  * user['lastName'] = brock
  *
  * user.lastName // => 'brock'
  *
  * A good way to get a quick glance at the object is to log it to the console.
  * This is called print-line debugging:
  *
  * console.log(user)
  *
  * console.log(JSON.stringify(user))
  *
  * Objects can store more or less anything in javascript. Most commonly they
  * will store primitive values like strings, numbers, booleans, etc. And
  * sometimes they will also store arrays, functions and even other objects!
  *
  * const student = {
  *   greet: () => console.log('HELLO!'),
  *   friends: ['larry', 'reggie', 'bob'],
  *   skills: {
  *      archery: 1,
  *      potttery: 10,
  *      reading: 4,
  *      gym: 12
  *   },
  *   name: 'louis',
  *   age: 12
  * }
  *
  * student.greet()  // => console.log('HELLO!')
  * student.skills   // => { archery: 1, pottery: 10, reading: 4, gym: 12 }
  *
  * Ok, that's enough explanation for now, lets dive into some examples!
  */

context('you have to look at this objectively', () => {
  context('a simple store', () => {
    const store = {
      // fill me with goodies!
    }

    it('has a name', () => {
      expect(store.name).toEqual('the pilgrim grocery')
    })

    xit('has an address', () => {
      expect(store.address).toEqual('123 four pride street')
    })

    xit('has an array of items in its inventory', () => {
      expect(store.inventory).toBeDefined()
      expect(Array.isArray(store.inventory)).toEqual(true)
    })

    xit('has chicken, apples and pears in the inventory', () => {
      expect(store.inventory).toContain('chicken')
      expect(store.inventory).toContain('apples')
      expect(store.inventory).toContain('pears')
    })
  })

  context('objects as libraries', () => {
    /*
     * We do a lot of importing and exporting in es6, this allows us to contain
     * a collections of business logic into certain files, or logical groupings.
     *
     * Lets create an object that contains a few related functions that could
     * someday be used as a module. We'll call this ClassCalculator. The class
     * calculator should contain a few functions that take in an array of
     * students (a class) and return some caluclated values related to that
     * class. I'll define the class for you and you can fill in the methods so
     * that they pass the following tests. The class will be an array of
     * objects!
     */

    const students = [
      { name: 'bill', gpa: 2.0, sex: 'male' },
      { name: 'sally', gpa: 3.0, sex: 'female' },
      { name: 'shanda', gpa: 4.0, sex: 'female' }
    ]

    const ClassCalculator = {
      studentCount: (students) => {
        /*
         * update this function to return the count of students passed in
         * remember, students are an array, isn't there something that can
         * quickly tell us the length of an array?
         *
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
         */
        return undefined
      },

      averageGPA: (students) => {
        let totalGpa = 0
        /*
         * we're looping over students here using the forEach method on array:
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
         */
        students.forEach(student => {
          // add the student gpa to the total gpa
          // uncomment the next line to log each student
          // console.log(student)
        })

        return totalGpa / students.length
      },

      highestGpa: (students) => {
        /*
         * fill in the function body here to return the highest gpa in the
         * collection of students passed in.
         */
        return undefined
      }
    }

    xit('calcuates the student count correctly', () => {
      expect(ClassCalculator.studentCount(students)).toEqual(3)
    })

    xit('calculates the average GPA correctly', () => {
      expect(ClassCalculator.averageGPA(students)).toEqual(3)
    })

    xit('returns the correct highest GPA', () => {
      expect(ClassCalculator.highestGpa(students)).toEqual(4)
    })
  })
})
