import React from 'react'

export default function Todo({todo: {text, id}, deleteTodo}) {
  return (
    <div>
      <a
        className="list-group-item" 
        onClick={() => {
          console.log('clicked')
          deleteTodo(id)
        }}>
          {text}: {id}
      </a>
    </div>
  )
}
