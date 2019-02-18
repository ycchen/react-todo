import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, deleteTodo}) {
  console.log('todos.length', todos.length);
    return (
      <div>
        {todos.map(todo => {
          console.log('------TODO--------', todo)
          return (
            <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
          )
        })}
      </div>
    )
}
