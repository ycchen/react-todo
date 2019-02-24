import React from 'react'

export default function Contact({contact}) {
  const {id, first_name, last_name} = contact
  return (
    <div>
      <p>Id: {id}</p>
      <p>First Name: {first_name}</p>
      <p>Last Name: {last_name}</p>
    </div>
  )
}
