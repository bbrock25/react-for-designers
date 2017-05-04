import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import ProfileCard from './component'

const stories = storiesOf('ProfileCard', module);
const defaultDescription = `
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum
sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur
est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
quam.
`
const cats = [
  'https://unsplash.it/200/300',
  'https://unsplash.it/300/300',
  'https://unsplash.it/300/400',
  'https://unsplash.it/400/400',
  'https://unsplash.it/400/500'
]

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <ProfileCard
    imageUrl={select('ImageUrl', cats, cats[0])}
    name={text('Name', 'Billy Boy')}
    description={text('Description', defaultDescription)}
  />
));