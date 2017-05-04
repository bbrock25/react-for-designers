import React from 'react'

function ProfileCard ({
  name,
  description,
  imageUrl
}) {
  return (
    <div>
      <img src={imageUrl} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ProfileCard