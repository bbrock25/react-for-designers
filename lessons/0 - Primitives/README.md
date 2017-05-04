# Lesson 0 - Lets get primitive

Ok, you've reached your first assignment, lets get your environment setup.

```
# install all of your node packages
yarn install

# run the first test
yarn test -- intro
```

Ok, if you've successfully run the above two commands, you should see a failing
test. This one is easy enough. Take a look at the test file and see what it's
doing! There are comments in-line in the file that should help you resolve the
issues. It is located at: `__tests__/intro.spec.js`

Make the changes, and then rerun your test: `yarn test -- intro`. Once that test
is all "green", commit your changes and continue reading.

## JavaScript Primitives

In JavaScript, we have a few primitive types that are fairly important to master
to become an effective developer. Don't worry a 'primitive type' might sound
scary, but really if you've experienced any JS at all, you've probably used 99%
of these before. We're going to cover the following types in this first lesson:

* number
* string
* boolean
* undefined
* null

Crack open the file `tests/primitives.spec.js` for a primer on primitives!

```
yarn test -- primitives
```

Once you have that spec running green, continue onto functions below.

## JavaScript Functions

A function (without side effects), in its simplest form, is something that takes
an input and returns some output. For example, the following is a function:

```javascript

function addTwo(x) {
  return x + 2
}

// here are some examples using this function

addTwo(2)   // => 4
addTwo(4)   // => 6
addTwo(6)   // => 8

```

_Arrow Functions_: in ES6, a new shorthand for defining functions was created,
probably because people were tired of typing the word `function` so much. This
is called an "Arrow Function" and for now, we'll assume its the same as a
standard function as defined above

```javascript
const addTwo = (x) => {
  return x + 2
}

// is the same as

function addTwo (x) {
  return x + 2
}
```

A few more pointers on functions. A function consists of a few key components:
* function name
* function arguments
* function body

```javascript
// in traditional JavaScript (not es6) we have the following

function adder (x, y, z) {
  console.log('we are adding these three values: ', x, y, z)

  return x + y + z
}
```
* "adder" is the function name
* x, y and z are the function arguments
* everything between the curly braces is the function body

```javascript
// similarly in es6 using an arrow function

const adder = (x, y, z) => {
  console.log('we are adding these three values: ', x, y, z)

  return x + y + z
}
```
* "adder" is the function name
* x, y and z are the function arguments
* everything between the curly braces is the function body

Now, run the spec 'functions' by calling `npm test -- functions` from the command
line and work through the exercises there!

## JavaScript Objects

We've all seen objects before, they're denoted by the curly braces being
assigned to a variable like so:

```javascript
const foo = {
  bar: 'baz'
}
```

We can access the properties within the object using either dot notation or by
indexing into the object with a string

```javascript
foo.bar          // => 'baz'
foo['bar']       // => 'baz'
```

What if we try to access attributes that don't exist on that object? Not much,
they just come back as undefined.

```javascript
foo.whatever     // => undefined
foo['whatever']  // => undefined
```

Now, run the spec 'objects' by calling `yarn test -- objects` from the command
line and work through the exercises there. This one gets a bit more challenging,
so be patient, you should have everything you need.

Once that spec is running green, run `yarn test` and look at all that green.
Doesn't that feel good?
