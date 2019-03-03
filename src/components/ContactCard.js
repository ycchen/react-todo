import React from 'react'
import { Card, Button, Icon, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function ContactCard({contact, deleteContact}) {
  const { id, firstName, lastName, phone, email, avator } = contact
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={avator} />
        <Card.Header>
          { firstName } { lastName }
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'>{ phone }</Icon></p>
          <p><Icon name='mail outline'>{ email }</Icon></p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/contacts/edit/${id}`} 
            className='ui basic button green'>Edit</Link>
          <Button basic color='red' 
            onClick={() => deleteContact(id)}>Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}
