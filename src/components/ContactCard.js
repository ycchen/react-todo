import React from 'react'
import { Card, Button, Icon, Image} from 'semantic-ui-react'

export default function ContactCard({contact}) {
  const { id, first_name, last_name, phone, email, avator } = contact
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={avator} />
        <Card.Header>
          { first_name } { last_name }
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'>{ phone }</Icon></p>
          <p><Icon name='mail outline'>{ email }</Icon></p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Edit</Button>
          <Button basic color='red'>Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}
