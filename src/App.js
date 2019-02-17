import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import TodoForm from './containers/TodoForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <TodoForm />
      </div>
    );
  }
}

export default App;
