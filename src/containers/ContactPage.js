import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllContacts } from '../actions/contactActions'
class ContactPage extends Component {
  render() {
    return (
      <div>
        <h1>Contact Page</h1>
      </div>
    )
  }
}


const mapDispatchToProps = (disptach) => {
  return{
    ...bindActionCreators({ fetchAllContacts }, disptach)
  }
}

export default connect(null, mapDispatchToProps)(ContactPage)