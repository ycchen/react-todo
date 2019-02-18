import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    console.log("constructor-props", props)
    console.log("constructor-this", this)
    this.state = {
       todo: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('===========Click submit')
    if (this.state.todo.trim()) {
      console.log(this.props)
      console.log(this.state.todo.length)
      this.props.addTodo(this.state)
      this.handleReset()      
    }
  }

  handleInputChange = (e) => {
    // console.log('e.target.name', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleReset = () => {
    console.log('handleReset got called')
    this.setState({todo: ''})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
        <input 
          className="form-control"
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
