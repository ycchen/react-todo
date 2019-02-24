import React from 'react'
import ContactCard from './ContactCard'
import { Card } from 'semantic-ui-react'

export default function ContactList({contacts}) {
  console.log('Inside of ContactList contacts', contacts.length);

  const cards = () => {
    return contacts.map( contact => {
      return (
        <ContactCard key={contact.id} contact={contact} />
      )
    })
  }

  const contactList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
  return (
    <div>
     { contacts.length > 0 && contactList }
    </div>
  )
}
