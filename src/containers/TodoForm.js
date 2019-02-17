import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions'
import TodoForm from '../components/TodoForm'

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => {
      dispatch(createTodo(todo))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoForm)