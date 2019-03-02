import React from 'react'
import ContactCard from './ContactCard'
import { Card } from 'semantic-ui-react'

export default function ContactList({contacts, deleteContact}) {
  console.log('Inside of ContactList contacts', contacts.length);

  const cards = () => {
    console.log('contacts', contacts);
    return contacts.map( contact => {
      return (
        <ContactCard key={contact.id} contact={contact} deleteContact={deleteContact} />
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
