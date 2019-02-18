import React from 'react'
import { connect } from 'react-redux'
import { createTodo, fetchAllTodos, deleteTodo } from '../actions'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
class TodoPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllTodos()
  }

  render() {
    console.log('TodoPage ====== this.props', this.props);
    console.log('TodoPage ====== this.props.todos', this.props.todos);
    return (
      <div>
        <h1>List of Todos ({this.props.todos.length})</h1>
        <TodoForm addTodo={this.props.createTodo} />
        There are {this.props.todos.length} todos
        <TodoList todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state inside of mapStateToProps', state)
  return{
    todos: state.todoStore.todos,
    loading: false,
    errors: {}
  } 
}


export default connect(mapStateToProps, {fetchAllTodos, createTodo, deleteTodo})(TodoPage)



