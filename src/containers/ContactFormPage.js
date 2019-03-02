import React from 'react'
import ContactForm from '../components/ContactForm'
import { connect } from 'react-redux'
import { fetchContact, newContact } from '../actions/contactActions'
import { bindActionCreators } from 'redux'

class ContactFormPage extends React.Component {
  componentDidMount = () => {
    const { id } = this.props.match.params
    console.log('this.props.match.params', this.props.match.params)
    if (id) {
      this.props.fetchContact(id)
    } else {
      this.props.newContact()
    }
  }
 
  render() {
    console.log('contactFormPage props',this.props);
    console.log('this.props.contact',this.props.contact);
    
    return (
      <div>
        <ContactForm contact={this.props.contact} onSubmit={this.submit} />
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
      {fetchContact, newContact}, 
      dispatch
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormPage)