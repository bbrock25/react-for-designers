import React from 'react'

const AVAILABLE_THEMES = {
  'default': 'button',
  'outline': 'button-outline',
  'clear': 'button-clear'
}

function Button ({
  theme = 'default',       // here we are defining a default value for 'theme'
  text,                    // we are NOT however defining a default value for text
  handleClick = () => {}   // the default click handler will be just an empty function
}) {

  // the following checks to see if the theme is in our object of
  // AVAILABLE_THEMES defined at the top of this file, anything that isn't in
  // that object will throw an error
  if (!AVAILABLE_THEMES[theme]) {
    throw new Error('unsupported theme', theme)
  }

  // here we return the actual template, its just a button wrapping some text,
  // that utilizes all of the properties that we passed in
  return (
    <button
      onClick={handleClick}
      className={AVAILABLE_THEMES[theme]}
    >
      {text}
    </button>
  )
}

export default Button