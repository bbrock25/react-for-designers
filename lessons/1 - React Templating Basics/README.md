# Lesson 1: React Templating Basics

Welcome to our first lesson where we'll actually be writing some React! React is
a very unique and interesting tool for creating components for the front-ends of our web
applications. There are a few differences between templating in React and what
we are typically used to when using standard HTML.

First off, all of our React templating will actually be written in JavaScript
files, meaning, using JavaScript! A very basic React template will look
something like this, eg in `SiteHeader.js`:

```javascript
import React from 'react'

function SiteHeader () {
  return (
    <div>
      <h2>Site Title</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Conctct</a></li>
      </ul>
    </div>
  )
}
```

If you're like me, you might have a few questions after a quick glance at that
code snippet.

_Are we writing our templates inside of JavaScript functions?_

Yes! All of our templates using React will be inside a JavaScript function. Each
function's return statement, surrounded by parenthesis, will provide our
template. Since we have imported React, and due to its functionality
behind-the-scenes, our function then becomes a **React Component**. According to
the [React Docs](https://facebook.github.io/react/docs/react-component.html)

> Components let you split the UI into independent, reusable pieces, and think
> about each piece in isolation.

_Is that just HTML in there?_

Also yes! Well, kind of... React uses a custom syntax called JSX, which you can
read up about [here](https://facebook.github.io/react/docs/jsx-in-depth.html).
The deal with JSX is this: it looks just like HTML in its simplest form, but you
can think of it more
as [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML). The cool thing
about JSX is that we can craft it using logic, which makes it very, _very_,
powerful. Additionally, we can compose components inside of other components,
meaning the templates that we write are 100% reusable.

Here's a little teaser: say we want to use the SiteHeader that we defined above
in a basic Layout. Let's create a `Layout` component for our home page in the
file named `HomeLayout.js`:

```javascript
import React from 'react'
import SiteHeader from 'components/SiteHeader'

function HomeLayout () {
  return (
    <div className="home">
      <SiteHeader />
      <h1>Home page</h1>
      <p>Welcome and enjoy your stay!</p>
    </div>
  )
}
```

Now looking at that, can you tell what were doing?

First we are importing the header, (which means we're getting the value of that
file's export, and assigning it to the local variable `SiteHeader`,) and then we
are creating the `Layout` component for our home page. This layout has a `div`
containing the contents for the page. The first item we render is the site
header (isn't that nice?) and then we also include some content for that page
specifically.

_What's with the className property on those elements?_

The authors of React opted to use `className` for the JSX property name for
declaring CSS class selectors for the eventual HTML element. There are pretty
good reasons behind this, but they're certainly outside the context of this
conversation. Just know that if you want to add a class to an element in React,
you'll have to specify it using `className` instead of `class`. That's it!


## Templating with Stateless Components

Ok, so you've seen a component, so what? That example was actually pretty
boring. The power of these components actually comes when you start adding
properties to them, and composing them. Let's take a look at a `UserProfileCard`
component that we would often see in a list view on LinkedIn or some other
socially-leaning site. In `BillsProfileCard.js`:

```javascript
import React from 'react'

function BillsProfileCard () {
  return (
    <section>
      <img src="http://placekitten.com/200/300" alt='looking good!'/>
      <h3>Bill the developer</h3>
      <p>Bill is a software engineer from chattanooga, tn....</p>
    </section>
  )
}
```

Ok, that's neat, now we can drop Bill's profile in anywhere that we like, but
what if we wanted to create a card for, say, Jeff? Now this is where it starts to
get cool. Let's refactor `BillsProfileCard` to be a bit more reusable. Here we are
creating a `ProfileCard` in `ProfileCard.js`.

```javascript
import React from 'react'

function ProfileCard (props) {
  return (
    <section>
      <img src={props.imageSrc} alt={props.altText}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </section>
  )
}
```

Now we have something a bit more reusable. Notice that the function takes in one
argument here, `props`, and then uses its value inside of the JSX. We can
access variables inside of the JSX template using "curly braces" `{}`, as
demonstrated above.

Now, lets create a list where we are rendering both Bill and Jeff's profiles in
the same view, in `SpartanEmployees.js`:

```javascript

import React from 'react'
import ProfileCard from 'components/ProfileCard'

function SpartanEmployees () {
  return (
    <section>
      <h1>Spartan Employees</h1>
      <ul className="employees">
        <li>
          <ProfileCard
            name="Bill"
            altText="super developer"
            imageSrc="http://placekitten.com/200/300"
            description="likes to code"
          />
        </li>
        <li>
          <ProfileCard
            name="Jeff"
            altText="a robot"
            imageSrc="http://placekitten.com/200/300"
            description="likes machine learning"
          />
        </li>
      </ul>
    </section>
  )
}
```

Notice that we are specifying property values for each ProfileCard: `name`,
`altText`, `imageSrc`, and `description`. Custom properties, ie properties other
than HTML attributes or DOM properties like `id`, `alt`, or `title`, are passed
into the ProfileCard component as a JavaScript object via the argument `props`.
Now we can create ProfileCards for everyone in our company super easily!

Ok, one last trick to make this a bit more readable. We can create individual
objects to pass into each component as props that define all the properties for
a given `ProfileCard`. Let's do that in the file named `SpartanEmployees.js`:

```javascript
import React from 'react'
import ProfileCard from 'components/ProfileCard'

const billProps = {
  name: 'Bill',
  altText: 'super developer',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes to code'
}

const jeffProps = {
  name: 'Jeff',
  altText: 'a robot',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes machine learning'
}


function SpartanEmployees () {
  return (
    <section>
      <h1>Spartan Employees</h1>
      <ul className="employees">
        <li><ProfileCard {...billProps} /></li>
        <li><ProfileCard {...jeffProps} /></li>
      </ul>
    </section>
  )
}
```

We created two variables here, `billProps` and `jeffProps`, which refer to
objects, and passed each one into the `ProfileCard` using the following syntax:
`{...billProps}` and `{...jeffProps}`. What this syntax does is pass all the
properties from that object down into the component as the properties that it is
expecting. When a programming language makes otherwise tedious operations like
this easy via syntax, it's called "syntactic sugar".

Remember how we defined the `ProfileCard` component?

```javascript
function ProfileCard (props) {
  // ...snipped...
}
```

It's just a function that takes in an object as props. Although React does a
little magic here with JSX, you can treat the following three functions as
equivalent in behavior:

```javascript
const billProps = {
  name: 'Bill',
  altText: 'super developer',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes to code'
}

function RenderProfile() {
  return (
    <div>
      <ProfileCard
        name={billProps.name}
        altText={billProps.altText}
        imageSrc={billProps.imageSrc}
        description={billProps.description}
      />
    </div>
    )
}

function RenderProfile() {
  return (
    <div>
      <ProfileCard {...billProps} />
    </div>
  )
}

function RenderProfile() {
  return (
    <div>
      {ProfileCard(billProps)}
    </div>
  )
}
```

where in that last example we are just passing the value of `billProps` to the
function `ProfileCard`. Yes, the components we are using are in fact just
functions! For future reference, either the first or second method is preferred,
the last method was merely illustrative.

Ok, cool. Enough already? I know. Let's get into writing and running some of our
own code :-)

### Destructuring Assignment - [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

One last detail...

Take a look at the Button Component defined in `components/Button/component.js`
Notice how we are defining our Button. This syntax inside the parenthesis might
seem a bit strange, but its really for your convenience.

```javascript
function Button ({
  theme = 'default',       // here we are defining a default value for 'theme'
  text,                    // we are NOT however defining a default value for text
  handleClick = () => {}   // the default click handler will be just an empty function
}) { ... }
```

In other react tutorials / examples you might see "stateless" components defined
as the following:

```javascript
function Button(props) {

  // the difference here is that in this case, we will have to reference each
  // of the properties through the prop argument that we pased in so our return
  // statement will look like this:
  return (
    <button
      onClick={props.handleClick}
      className={AVAILABLE_THEMES[props.theme]}
    >
      {props.text}
    </button>
  )

}
```

In both scenarios, the Button has the same public API (is called the same way).

```javascript
const buttonProps = {
  theme: 'default',
  text: 'please click me!'
  handleClick: () => console.log('i was clicked!')
}

// and used like this

<Button {...buttonProps} />
```

#### So what is this black magic using the curly braces?

It's called "[Destructuring
Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)"

When defining our component functions, destructuring assignment allows us to:

1. Access our properties without having to 'reach through' props parameter
1. Provide easy to read default values inline in the function definition

Lets break this down one step further just ignoring React for now. If we have an
object `foo` defined like so:

```javascript
const foo = {
  bar: 1,
  baz: 2
}
```

And we want to assign the values `bar` and `baz` to local variables, we can use
the following shorthand:

```javascript
const { bar, baz } = foo

console.log(bar) // => 1
console.log(baz) // => 2
```

This is exactly what we are doing in our new style function definition, with
only one difference. We are setting default values (if we want) when they are
not already provided. Lets now use destructuring assignment to pick values out
of some more object while providing default values.

```javascript
// Ex1: all variables get the default values
const foo1 = { }

let { bar = 'babar', baz = 'babaz', bong = 'bubbles' } = foo1

console.log(bar) // => 'babar'
console.log(baz) // => 'babaz'
console.log(bong) // => 'bubbles'


// Ex2: only baz and bong get default values
const foo2 = { bar: 'barnone' }

let { bar = 'babar', baz = 'babaz', bong = 'bubbles' } = foo2

// here only baz and bong will get default values
console.log(bar) // => 'barnone'
console.log(baz) // => 'babaz'
console.log(bong) // => 'bubbles'


// Ex3: no default values were utilized
const foo3 = { bar: 'money for nothin', baz: 'chicks', bong: 'for free'}

let { bar = 'babar', baz = 'babaz', bong = 'bubbles' } = foo3

console.log(bar) // => 'money for nothin'
console.log(baz) // => 'chicks'
console.log(bong) // => 'for free'
```

Clear as mud? Great, lets move on!

## Writing Logic in Our Components

Given that our Components are entirely written in JavaScript, that means that we
can use JavaScript to define and control their behavior. So, for demonstration
purposes, lets create a component that renders a title and some text.

```javascript
// define a component to render our title
function Header({ title }) {
  return (<h1>{title}</h1>)
}

// define a component to render our text
function Body({ text }) {
  return (<p>{text}</p>)
}

// now heres a component to bring it all together
function ContentRegion({ title, text }) {
  return (
    <section>
      <Header title={title} />
      <Body text={text} />
    </section>
  )
}
```

So, now that we have our content region, lets update it to only define text if
it was passed in as a prop. So we want the component to work in both of the
following scenarios

```javascript
// scenario 1
<ContentRegion title="Rufio" />

// should result in the following
<section>
  <h1>Rufio</h1>
</section>

// scenario 2

const title = 'Rufio'
const text = `Rufio is the leader of the Lost Boys in the 1991 film Hook, played
by Dante Basco. He is an original character in this film, commonly remembered
for his big, spiked, red-striped hair.`

<Header title={title} text={text} />

// should result in the following
<section>
  <h1>Rufio</h1>
  <p>
    Rufio is the leader of the Lost Boys in the 1991 film Hook, played by Dante
    Basco. He is an original character in this film, commonly remembered for his
    big, spiked, red-striped hair.
  </p>
</section>
```

Ok, so this seems reasonable. Lets update ContentRegion to only display the text
if it is passed in:

```javascript

// iteraion 1
function ContentRegion({ title, text }) {
  if(!text) {
    return (
      <section>
        <Header title={title} />
      </section>
    )
  }

  // otherwise, return the whole thing
  return (
    <section>
      <Header title={title} />
      <Body text={text} />
    </section>
  )
}
```

Now, if we call the ContentRegion with a title and no text:
```javascript
<ContentRegion title="A title" />
```
The title will be defined as "A title" and the text will be `undefined`.
Remember from our previous exercises that `undefined` is a falsy value, which
means that if we evaluate it in an conditional, it will evaluate as `false`.

Furthermore, if we call the Component with title and text
```javascript
<ContentRegion title="A title" text="lorem..."/>
```
The title will be defined as "A title" and the text will be "lorem..." Remember
from our previous exercises that a non-empty string is a truthy value, which
means that if we evaluate it in an conditional, it will evaluate as `true`.

Now, lets do a simple refactor to reduce the duplicated code in
ContentRegion:

```javascript
function ContentRegion({ title, text }) {
  return (
    <section>
      <Header title={title}/>
      {text && (<Body text={text}/>)}
    </section>
  )
}
```
The secret sauce is the line `{text && (<Body text={text} />)}`. Here we are
checking that `text` is a truthy value (a non empty string) and then rendering
the `Body` component in-line in that evaluation. A fun tidbit of info is that
when using `&&` in JavaScript, the last evaulated operator is returned. So in
our case that is `(<Body text={text} />)` which is what is eventually rendered
(given that `text` is a truthy value). You can see some more examples of this in
the [react
documentation](https://facebook.github.io/react/docs/conditional-rendering.html#inline-if-with-logical-ampamp-operator)

Last trick. What if we wanted to update our Component to render multiple
paragraphs if we were to pass in an array of strings for the value of text?
Seems reasonable ;)

```javascript
// lets start with the Body component, we should update the function definition
// so that its crystal clear that we are expecting an array, we'll do that by
// giving it a default value of `[]` for text. Where text should be an array of
// strings

function Body({ text = [] }) {
  // omitted
}

// next lets update the body so that we are iterating over the text that is
// provided. Remember the Array#map method?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function Body({ text = [] }) {
  return (
    <div>
      {text.map((t) => <p>{t}</p>)}
    </div>
  )
}

// here we are mapping over the text that is passed in to return an array of
// paragraphs. given that text is an array of three string

const text = ['line 1', 'line 2', 'line 3']

// if we call the following
text.map((t) => <p>{t}</p>)

// we will be given this in return
[ <p>line1</p>, <p>line2</p>, <p>line3</p> ]

// which within the context of React, is rendered as three seperate paragraps
// so given this from our template above

<div>
  {text.map((t) => <p>{t}</p>)}
</div>

// becomes

<div>
  <p>line1</p>
  <p>line2</p>
  <p>line3</p>
</div>
```

Ok, so now we've gotten the body updated, now we need to update our
ContentRegion Component. Lets change the definition to have a default value for
text like we did for Body, and also update the conditional render of the body
component.

```javascript
  function ContentRegion({ title, text = [] }) {
    return (
      <section>
        <Header title={title}/>
        {text.length > 0 && (<Body text={text}/>)}
      </section>
    )
  }
```
Now calling our ConentRegion with an array of strings for text will result in
multiple paragraphs.
```javascript

const title = 'The title'
const text = ['line 1', 'line 2', 'line 3']

<ContentRegion title={title} text={text} />

// results in
<section>
  <div>
    <p>line1</p>
    <p>line2</p>
    <p>line3</p>
  </div>
</section>
```

Boom.

## Storybook

For the remainder of this tutorial, we'll be using storybook to visualize our
components. Storybook is a nice little utility that allows us to render react
components and change their properties through a gui. [Check out the
docs](https://getstorybook.io/) and the
[Repo](https://github.com/storybooks/react-storybook)

In order to start up the storybook server, run `npm install && npm run storybook
` and then visit [`http://localhost:9001`](http://localhost:9001).

You'll see a button that we have already created for you that is also styled
using [Milligram](https://milligram.github.io/) by default. Milligram isn't a
standard for us by any means, I've just included it here to get us rolling...

Now, take a look at the Button Component in storybook. Below the button you will
see a section with two tabs "Action Logger" and "Knobs"; this is where storybook
starts to get fun. Click the button and you'll see events being logged into the
action logger. Now switch to the Knobs tab and start changing around some of the
values. They should immediately update the state of that component,
demonstrating the different parameters that are available for change on that
component.

## Generating Components

Lets install the [redux-cli](https://github.com/SpencerCDixon/redux-cli) tool so
that you can create and iterate on components with ease.
```
npm install -g redux-cli
```
And now lets create a "dumb" (Stateless) Component
```
redux g dumb SiteHeader
```
If you then go look in `components/SiteHeader` you'll see everything that we
just generated. Also, look in storybook, the component should already be wired
up. You can now go in, change the component and view your results in real time.

## Code Structure

Our Components follow a pretty simple pattern where all of the dependencies for
rendering that component should be included in that component's directory.

```bash
▼ components/
  ▼ Button/
      component.js        # defines the actual component
      component.spec.js   # tests for this component
      index.js            # handles exporting the component as a directory
      stories.js          # where all of our stories are defined
      styles.css          # styles for the individual component
```

In order to use this component, just import it like the following:

```javascript
import Button from './components/Button'

function SomeLayoutWithOnlyAButton () {
  return (<Button />)
}
```

## Testing

OK, I know that this has been a bit of reading until now, and for that I
apologize. In fact, it might be a good idea to put this at the top and work
testing examples into all of the sections that were discussed up until now. That
can be for another day.

For unit testing React Components, we'll be using primarily two libraries:
1. [Jest](https://facebook.github.io/jest/) - the test runner
1. [Enzyme](http://airbnb.io/enzyme/) - renders components and helps us make
   assertions

Lets start by just running our test suite, and then we'll drop into code. You
can run the suite, same as the previous exercises by running `npm test` from the
command line. Go ahead, do it. Additionally, if you would like the test runner
to stay active and watch for file changes, you can run `npm test -- --watch`.
This passes the `--watch` flag to the underlying test running and lets Jest know
that it should stay active and watch for changes.

Now, notice that we have a passing test suite for the two react components that
were created to demonstrate storybook, Button and Header. If at any point you
get stuck during this testing section, feel free to use those components and
their tests for reference.

Now, take a look at the ProfileCard component's specs file located at
`app/components/ProfileCard/component.spec.js` and change the first pending spec
to (`xit`) to `it`.

Run the test suite and watch it fail. Now, fix the spec and move onto the next!

For these exercises, you might find the [enzyme](http://airbnb.io/enzyme/)
documentation helpful. Have fun!
