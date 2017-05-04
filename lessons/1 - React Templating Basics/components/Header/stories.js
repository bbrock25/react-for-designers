import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Header from './component'

const stories = storiesOf('Header', module);
const priorities = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
]

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <Header
    title={text('Header Title', 'A Page Header')}
    priority={select('Header Prioritye', priorities, 'h1')}
  />
));