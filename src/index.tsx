import 'es6-promise/auto'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const MOUNT_NODE = document.getElementById('root')
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  MOUNT_NODE
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require<IRequireImport>('./App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      MOUNT_NODE
    )
  })
}
