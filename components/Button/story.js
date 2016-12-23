import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import Button from './component'

const classNameOptions = [
  'button', 'button-outline', 'button-clear'
]
const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <Button
    onClick={action('clicked')}
    className={select('button class', classNameOptions)}
    text={text('Button Text', 'Hello Button')}
  />
));
