import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

export default function ContactCard({contact}) {
  const { id, first_name, last_name, phone, email } = contact
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'>
            { first_name } { last_name }
          </Icon>
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'>{ phone }</Icon></p>
          <p><Icon name='phone'>{ email }</Icon></p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
