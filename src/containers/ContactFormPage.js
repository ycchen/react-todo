import React from 'react'
import ContactForm from '../components/ContactForm'
import { connect } from 'react-redux'
import { fetchContact, newContact, saveContact, updateContact } from '../actions/contactActions'
import { bindActionCreators } from 'redux'
import { SubmissionError } from 'redux-form'
import { Redirect } from 'react-router'

class ContactFormPage extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    console.log('this.props.match.params', this.props.match.params)
    if (id) {
      this.props.fetchContact(id)
    } else {
      this.props.newContact()
    }
  }
  
  submit = (contact) => {
    if(!contact.id){
      console.log('create new add contact')
      console.log('!contact.id', !contact.id);
      return this.props.saveContact(contact)
        .then(response => this.setState({ redirect: true}))
        .catch(error => {
          throw new SubmissionError(this.props.errors)
        })
    } else {
      console.log(`update existing contact ${contact.id}`)
    }
  }
  render() {
    console.log('contactFormPage props',this.props);
    console.log('this.props.contact',this.props.contact);
    return (
      <div>
        {
          this.state.redirect?
          <Redirect to="/contacts" /> :
          <ContactForm contact={this.props.contact} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.match.params.id
  // console.log('state====', state)
  // console.log('ownProps====', ownProps)
  return {
    // contact: state.contactStore.contacts.filter(item => item.id === id),
    contact: state.contactStore.contact,
    error: state.contactStore.errors
  }
}

// const mapDispatchToProps = {
//     fetchContact
// }

const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators(
      {fetchContact, newContact, saveContact}, 
      dispatch
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormPage)