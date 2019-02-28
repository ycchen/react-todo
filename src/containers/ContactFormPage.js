import React from 'react'
import ContactForm from '../components/ContactForm'
import { connect } from 'react-redux'
import { fetchContact } from '../actions/contactActions'
import { bindActionCreators } from 'redux'

class ContactFormPage extends React.Component {
  componentDidMount = () => {
    const { id } = this.props.match.params
    console.log('this.props.match.params', this.props.match.params)
    this.props.fetchContact(id)
  }
  render() {
    console.log('contactFormPage props',this.props);
    console.log('this.props.contact',this.props.contact);
    
    return (
      <div>
        <ContactForm contact={this.props.contact} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
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
      {fetchContact}, 
      dispatch
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormPage)