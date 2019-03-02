import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Form, Grid, Button } from 'semantic-ui-react';

// decompose `values` to {firstName, lastName, phone, and email}
// set default as empty firstName=''
// {firstName='', lastName='', phone='', email=''}
const validate = (values) => {
  let errors = {}
  let isError = false

  if (!values.firstName) {
    errors.firstName = {
      message: 'Required'
    }
    isError = true
  }
  if (!values.lastName) {
    errors.lastName = {
      message: 'Required'
    }
    isError = true
  }

  // if (isError) {
  //   throw new SubmissionError(errors)
  // } else {
  //   console.log('valid submission')
  //   console.log(values)
  // }
  return errors
}
// decompose props field to { input, label, type, meta: {touched, error}}

class ContactForm extends Component {
  
  componentWillReceiveProps = (nextProps) => { // load contact asynchronously
    const { contact } = nextProps
    console.log('inside of componentWillReceiveProps')
    console.log('this.props',this.props);
    console.log('nextProps',nextProps);
    
    if(contact.id !== this.props.contact.id) { // Initialize form only once
      this.props.initialize(contact)
    }
  }
  renderField = ({input, label, type, meta: { touched, error}}) => (
    <Form.Field className={{error:touched && error}}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      { touched && error && <span className="error">{error.message}</span> }
    </Form.Field>
  )

  render() {
    const { handleSubmit, contact } = this.props
    return (
      <Grid centered columns={2}>
        <Grid.Column>
        <h1 style={{marginTop: "1em"}}>{ contact.id ? 'Edit Contact' : 'Add New Contact'}</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths='equal'>
            <Field name="firstName" label="First Name" component={this.renderField} type="text"/>
            <Field name="lastName" label="Last Name" component={this.renderField} type="text"/>
          </Form.Group>
          <Field name="phone" label="Phone" component={this.renderField} type="text"/>
          <Field name="email" label="Email" component={this.renderField} type="text"/>
          <Button primary type="submit">Save</Button>
        </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate})(ContactForm)