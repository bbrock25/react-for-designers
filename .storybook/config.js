import React from 'react'
import { configure, addDecorator } from '@kadira/storybook';

const req = require.context('../components', true, /.story.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const CenterDecorator = (story) => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0",
    padding: "20",
    height: "95vh"
  }}>
    {story()}
  </div>
)

addDecorator(CenterDecorator)

configure(loadStories, module);
