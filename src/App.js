import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import TodoForm from './containers/TodoForm'
import TodoList from './containers/TodoList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
