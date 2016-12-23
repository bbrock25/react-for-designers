import React from 'react'

import milligram from 'milligram'

export default function Button (props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
    >
      {props.text}
    </button>
  )
}
