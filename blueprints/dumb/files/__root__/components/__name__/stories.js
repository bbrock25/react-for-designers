import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import <%= pascalEntityName %> from './component'

const stories = storiesOf('<%= pascalEntityName %>', module);

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <<%= pascalEntityName %>
    title={text('Title', 'Hello <%= pascalEntityName %>')}
  />
));