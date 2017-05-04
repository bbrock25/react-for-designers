import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'

import milligram from 'milligram'

const req = require.context('../lessons', true, /.stories.js$/)

function loadStories() {
  req.keys().map((filename) => req(filename))
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

configure(loadStories, module)