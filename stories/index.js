import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './component'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')} text="Hello Button" />
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>
      😀 😎 👍 💯
    </button>
  ));
