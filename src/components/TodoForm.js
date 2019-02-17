import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    todo: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('===========Click submit')
    if (this.state.todo.trim()) {
      console.log(this.state.todo.length)
      this.props.onAddTodo(this.state)
      this.handleReset()      
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleReset = () => {
    console.log('handleReset got called')
    this.setState({
      todo: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
        <input 
          className="form-control col-md-12"
          type="text"
          placeholder="Todo name"
          name="todo"
          onChange={ this.handleInputChange }
          value={ this.state.todo }
         />
      </form>
      </div>
    )
  }
}

export default TodoForm
