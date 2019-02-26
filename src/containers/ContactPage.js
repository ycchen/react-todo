import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllContacts, deleteContact } from '../actions/contactActions'
import ContactList from '../components/ContactList'

class ContactPage extends Component {
  componentDidMount() {
    this.props.fetchAllContacts()
  }

  render() {
    console.log('ContactPage ====== this.props', this.props);
    console.log('ContactPage ====== this.props.contacts', this.props.contacts);
    return (
      <div>
        <h1>Contact Page</h1>
        <h4>Contacts ({this.props.contacts.length})</h4>
        <ContactList contacts={this.props.contacts} deleteContact={this.props.deleteContact} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    contacts: state.contactStore.contacts,
    loading: false,
    errors: {}
  }
}
const mapDispatchToProps = (disptach) => {
  return{
    ...bindActionCreators({ fetchAllContacts, deleteContact }, disptach)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage)