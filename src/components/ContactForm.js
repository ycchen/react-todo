import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Form, Grid, Button } from 'semantic-ui-react';

// decompose `values` to {firstName, lastName, phone, and email}
// set default as empty firstName=''
// {firstName='', lastName='', phone='', email=''}
const submit = (values) => {
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

  if (isError) {
    throw new SubmissionError(errors)
  } else {
    console.log('valid submission')
    console.log(values)
  }
  // return errors
}
// decompose props field to { input, label, type, meta: {touched, error}}
const renderField = ({input, label, type, meta: { touched, error}}) => (
  <Form.Field className={{error:touched && error}}>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    { touched && error && <span className="error">{error.message}</span> }
  </Form.Field>
)

const ContactFormFunc = ({handleSubmit}) => (
  <Grid centered columns={2}>
    <Grid.Column>
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Group widths='equal'>
        <Field name="firstName" label="First Name" component={renderField} type="text"/>
        <Field name="lastName" label="Last Name" component={renderField} type="text"/>
      </Form.Group>
      <Field name="phone" label="Phone" component={renderField} type="text"/>
      <Field name="email" label="Email" component={renderField} type="text"/>
      <Button primary type="submit">Save</Button>
    </Form>
    </Grid.Column>
  </Grid>
  )

const ContactForm = reduxForm({
  form: 'contact'
})(ContactFormFunc)

export default ContactForm