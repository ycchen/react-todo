import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Grid, Button } from 'semantic-ui-react'
import classnames from 'classnames'

// decompose `values` to {firstName, lastName, phone, and email}
// set default as empty firstName=''
// {firstName='', lastName='', phone='', email=''}
const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = {
      message: 'Required'
    }
  }
  if (!values.lastName) {
    errors.lastName = {
      message: 'Required'
    }
  }
  if (!values.email) {
    errors.email = {
      message: 'Required'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors
}

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

  // decompose props field to { input, label, type, meta: {touched, error}}
  renderField = ({input, label, type, meta: { touched, error}}) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      { touched && error && <span className="error">{error.message}</span> }
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, reset, contact } = this.props
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
          <Button primary type="submit" disabled={pristine || submitting}>{ contact.id? 'Update' : 'Save'}</Button>
          <Button negative disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
        </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate})(ContactForm)