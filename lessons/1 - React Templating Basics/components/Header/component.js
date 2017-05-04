import React from 'react'

const VALID_PRIORITIES = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
]

export default function ({
  priority = 'h1',
  title
}) {
  const HeaderTag = priority

  if (!VALID_PRIORITIES.includes(HeaderTag)) {
    throw new Error(`invalid priority "${priority}" given to Header Component`)
  }

  if (!title) {
    throw new Error(`title is a required property of Header Component`)
  }

  return (
    <HeaderTag>{title}</HeaderTag>

  )
}