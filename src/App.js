import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

window.id = 0
class App extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props)
    // Set initial state
    this.state = {
       data: []
    }
    this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

  componentDidMount() {
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data: res.data})
      })
  }
  

  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = {text: val}

    // Update data
    // this.state.data.push(todo)
    axios.post(this.apiUrl, todo)
      .then((res) => {
        this.state.data.push(res.data)
        this.setState({data: this.state.data})
      })

    // // Update state
    // this.setState({data: this.state.data})
  }

  // Handle remove

  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo
    })

    // Update state with filter
    // this.setState({data: remainder})
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder})
      })
  }
  
  render() {

    const Title = ({todoCount}) => {
      return (
        <div>
          <div>
            <h1>to-do ({todoCount})</h1>
          </div>
        </div>
      )
    }
    
    const TodoForm = ({addTodo}) => {
      // Input tracker
      let input;
      return (
        <form onSubmit={(e) => {
          e.preventDefault()
          addTodo(input.value)
          input.value =''
        }}>
          <input 
            className="form-control col-md-12" 
            ref= {node => {
              input = node
            }} />
        </form>
      )
    }

    const Todo = ({todo, remove}) => {
      // Each Todo      
      return (
        <a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>
          {todo.text}
        </a>
      )

    }

    const TodoList = ({todos, remove}) => {
      // Map through the todos
      const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
      })

      return (<div className="list-group" style={{marginTop: '30px'}}>{todoNode}</div>)
    }

    return (
      <div className="App">
        <Title todoCount={this.state.data.length} />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
          />
      </div>
    );
  }
}

export default App;
