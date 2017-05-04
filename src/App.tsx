import * as React from 'react'
import styled from 'styled-components'

import { theme } from './ui'

interface IAppProps {
  className: string
}

const App: React.SFC<IAppProps> = ({ className }) => (
  <section className={className}>
    <h2>Hello React Tutorials</h2>
  </section>
)

const AppWithStyles = styled(App)`
  background-color: ${theme.background.light};
  height: 100%;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`

export default AppWithStyles
