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

## Storybook
## CSS Modules
## Testing With Enzyme
## Logic in Components
