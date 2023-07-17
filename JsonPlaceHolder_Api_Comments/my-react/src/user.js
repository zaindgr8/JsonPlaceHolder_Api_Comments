import React from 'react'

function User({id, email, name}) {
  return (
    <div>
        <span>{email}</span>
        <span>{name}</span>
    </div>
  )
}

export default User