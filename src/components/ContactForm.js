import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       contact: {}
    }
  }
  
  render() {
    const { contact } = this.props
    console.log('contact is ', contact)
    return (
      <div>
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="first name"
            name="first_name"
            value={contact.first_name}
            />
          <input
            className="form-control"
            type="text"
            placeholder="last name"
            name="last_name"
            value={contact.last_name}
            />
          <input
            className="form-control"
            type="text"
            placeholder="first.last@domain.com"
            name="email"
            value={contact.email}
            />
          <input
            className="form-control"
            type="text"
            placeholder="1-703-123-4567"
            name="phone"
            value={contact.phone}
            />
        </form>
      </div>
    )
  }
}

export default ContactForm