# Lesson 1: React Templating Basics

Welcome to our first lesson where we'll actually be writing some React! React is
a very unique and interesting tool for composing front-ends of our web
applications. There are a few differences between templating in React and what
we are typically used to when using standard HTML.

First off, all of our React templating will actually be written in JavaScript
files. A very basic React template will look something like this:

```javascript
function SiteHeader () {
  return (
    <div>
      <h2 className="title">Site Title</h2>
      <ul className="navElements">
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

Yes! All of our templates using react will be inside either a JavaScript
function or a class. Functions are a bit easier to reason about, so we're
starting there. Each functions return statement will include our template for
that function, surrounded by parenthesis. That function then becomes a **React
Component**. According to the [React
Docs](https://facebook.github.io/react/docs/react-component.html)

> Components let you split the UI into independent, reusable pieces, and think
> about each piece in isolation.

_Is that just HTML in there?_

Also yes! well, kindof... React uses a custom syntax called JSX, you can read up
about it [here](https://facebook.github.io/react/docs/jsx-in-depth.html).
The deal with JSX is this, it looks just like HTML in its simplest form, but you
can think of it more as XML. The cool thing about JSX is that we can craft it
using javascript logic, which makes it very, _very_, powerful. Additionally, we
can compose Components using other Components so that the templates that we write
become 100% reusable. Here's a little teaser:

Say we want to use the SiteHeader that we defined above in a basic Layout. Lets
create a Layout for our home page.

```javascript
import SiteHeader from 'components/SiteHeader'

function HomeLayout () {
  return (
    <div>
      <SiteHeader />
      <h1>Home page</h1>
      <p>lorem...</p>
    </div>
  )
}
```

Now looking at that, can you tell what were doing?

First we are importing the header, and then we are creating the Layout for our
Home page. That layout includes a `div` containing the contents for the page.
The first item we render is the site header (isn't that nice?) and then we also
include some content for that page specifically.

_What's with the className property on those elements?_

The authors of React opted to use `className` when declaring a css class
selector for an HTML element. There are pretty good reasons behind this, but
they're certainly outside the context of this conversation. Just know that if
you want to add a class to an element in React, you'll have to specify it using
className rather than class. That's it!


## Templating with Stateless Components

Ok, so you've seen a component, so what? That example was actually pretty
boring. The power of these components actually comes when you start adding
properties to them and composign them together. Lets take a look at a
UserProfileCard that we would often see in a list view on LinkedIn or some other
Socially leaning site.

```javascript
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
what if we wanted to create a card for say, Jeff? Now this is where it starts to
get cool. Lets refactor BillsProfileCard to be a bit more reusable. Here we are
creating a ProfileCard.

```javascript
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

Now, we have something a bit more reusable. Notice that the function takes in 1
argument here `props` and then uses that property inside of the JSX. We can
access variables inside of the JSX template using the "curly braces" `{}` as
demonstrated above.

Now, lets create a list where we are rendering both Bill and Jeff's profiles in
the same view.

```javascript
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

Notice that we are specifying specific properties for each ProfileCard: `name`,
`altText`, `imageSrc`, and `description`. These are passed into the ProfileCard
component as the argument `props`. Now we can create ProfileCards for everyone
in our company super easily!

Ok, one last trick to make this a bit more readable. We can create individual
objects to pass into each component as props that define all the attributes for
a given `ProfileCard`.

```javascript
const billsProps = {
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

We created to objects here, `billProps` and `jeffProps` and passed each one into
the `ProfileCard` using the following syntax `{...billProps}` and
`{...jeffProps}`. What that syntax does is passes all the properties from that
object down into that component as the properties that it is expecting.

Remember how we defined the ProfileCard component?

```javascript
function ProfileCard (props) {
....
}
```

Its just a function that takes in an object as props. React does a little magic
here with JSX, but really you can translate the following statements to be
equivalent

```javascript
const billsProps = {
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

Where in that last example were are just passing the billProps object to the
function ProfileCard. Yes, the Components we are using are in fact just
functions! For future reference, either the first or second method is preferred,
the last method was merely illustrative.

Ok, cool. Enough already? I know. Lets get into writing and running some of our
own code :-)

## Storybook
## CSS Modules
## Testing With Enzyme
## Logic in Components
