import React from 'react'
import { connect } from 'react-redux'
import { createTodo, fetchAllTodos, deleteTodo } from '../actions'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { bindActionCreators } from 'redux'
class TodoPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllTodos()
  }

  render() {
    console.log('TodoPage ====== this.props', this.props);
    console.log('TodoPage ====== this.props.todos', this.props.todos);
    return (
      <div>
        <h1>Todo Page</h1>
        <h3>Todos ({this.props.todos.length})</h3>
        <TodoForm addTodo={this.props.createTodo} />
        There are {this.props.todos.length} todos
        <TodoList todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state inside of mapStateToProps', state)
  return{
    todos: state.todoStore.todos,
    loading: false,
    errors: {}
  } 
}

// const mapDispatchToProps = {
//   fetchAllTodos,
//   createTodo,
//   deleteTodo
// }

const mapDispatchToProps= (dispatch) => {
  return {
    ...bindActionCreators(
      {fetchAllTodos, createTodo, deleteTodo},
      dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)



