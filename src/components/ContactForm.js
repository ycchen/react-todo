import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const submit = (values) => {
  console.log('inside of the contactForm')
  console.log(values)
}
// decompose field to { input, meta: {touched, error}}
const renderField = ({input, label, type, meta: { touched, error}}) => (
  <div className="input-row">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    { touched && error && <span className="error">{error}</span> }
  </div>
)

const ContactFormFunc = ({handleSubmit}) => (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field name="firstName" label="First Name" component={renderField} type="text"/>
      </div>
      <div>
        <Field name="lastName" label="Last Name" component={renderField} type="text"/>
      </div>
      <div>
        <Field name="phone" label="Phone" component={renderField} type="text"/>
      </div>
      <div>
        <Field name="email" label="Email" component={renderField} type="text"/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )

const ContactForm = reduxForm({
  form: 'contact'
})(ContactFormFunc)

export default ContactForm