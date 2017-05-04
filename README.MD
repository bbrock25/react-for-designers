# React for Designers

React & JavaScript have become staples in the modern web-developers toolbox. Say
what you will about the state of the JavaScript nation, but neither of these
technologies are going anywhere soon. The goal behind this series is to
introduce the fundamentals of JavaScript and React to someone coming from a
background in traditional front-end design  that has had solid exposure to HTML
and CSS but tends to tip-toe around JavaScript (I'm looking at you all the
copy-paster's out there!) Don't worry, we'll start slow and build on some
fundamentals each lesson.

## Prerequisites
* Familiarity with HTML, CSS and a dash of JS
* A command line
* `git`
* `node v7.9.0` - [Manage Node versions with NVM](https://github.com/creationix/nvm)
* `yarn v0.23.4` - [Install](https://yarnpkg.com/en/docs/install)

## Workflow and Test Driven Development

Each lesson will begin by checking out the relevant branch, installing any new
dependencies and then running the tests. Some lessons will involve running a
development server and will have  visuals, others will not. Directions for each
lesson will be in both the readme and the tests.

If you haven't written many tests before, the format here might come as a
surprise. Test driven development works as follows:

* a developer identifies a feature / requirement
* the developer then writes a test representing that feature
* the test is initially failing, since the feature hasn't been developed yet
* the developer then determines the work that is required to implement that
  feature and goes about writing the code that makes that test pass
* once the test is passing, the code is in a good state to be 'refactored'. This
  gives the developer the ability to clean or change the internals of the
  implementation while maintaining the desired output.
* Once the tests are passing, the feature can be considered complete.
* Rinse, wash, repeat for additional features and functionality

Now, there are many merits to this approach, and let's be honest, there are
some things that are quite difficult to pin down in code, especially when it
comes to presentation, however, this is a great starting point for base
functionality.

These exercises will often consist of initially pending or failing tests, and it
will be your responsibility to get each exercise passing (all green with no
pending tests). Later on, you might even want to experiment writing your own
tests. Here we will be testing basic JavaScript logic and how that applies to
react components.

I really hope you enjoy this series. Feedback is always appreciated in the form
of issues or a pull request. Lets get going!

Lets get started!

## Getting set up

```bash
# get the source code
git clone https://github.com/spartansystems/react-tutorials.git

# get into the directory
cd react-tutorials

# Open an editor and navigate to `lessons/0 - Primitives`
```
