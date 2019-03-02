import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
class ContactForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       contact: {}
    }
  }
  submit = (values) => {
    console.log('inside of the contactForm')
    console.log(values)
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
       <label htmlFor="firstName">First Name</label>
        <div>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <label htmlFor="lastName">Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <label htmlFor="phone">Phone</label>
        <div>
          <Field name="phone" component="input" type="text"/>
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <Field name="email" component="input" type="text"/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm