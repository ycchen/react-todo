import React from 'react'
import Contact from './Contact'
export default function ContactList({contacts}) {
  console.log('Inside of ContactList contacts', contacts.length);
  return (
    <div>
      {contacts.map(contact => {
        return (
          <Contact contact={contact} key={contact.id} />
        )
      })}    
    </div>
  )
}
