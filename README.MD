# Lesson 0 - Lets get primitive

Ok, you've reached your first assignment, lets get your environment setup.

```
# install all of your node packages
npm install

# run the first test
npm test -- intro
```

Ok, if you've sucessfully run the above two commands, you should see a failing
test. This one is easy enough. Take a look at the test file and see what it's
doing! There are comments in-line in the file that should help you resolve the
issues.

Make the changes, and then rerun your test: `npm test -- intro`. Once that test
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

Crack open the file `tests/primitives-test.js` for a primer on primitives!

Once you have that spec running green, continue onto functions below.

## Javascript Functions

A function (without side effects), in its simplest form, is something that takes
and input and returns some output. For example, the following is a function:

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
## Javascript Objects

We've all seen objects before, they're denoted by the curly braces being
assigned to a variable like so:

```javascript
const foo = {
  bar: 'baz'
}

// where we can access the properties within the object using either dot
// notation or by a indexing into the obejct with a string

foo.bar     // => 'baz'
foo['bar']  // => 'baz'
```

