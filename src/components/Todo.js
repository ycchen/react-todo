import React from 'react'

export default function Todo({todo: {text, id}, onDelete}) {
  return (
    <div>
      <a
        className="list-group-item" 
        onClick={() => {
          console.log('clicked')
          onDelete(id)
        }}>
          {text}: {id}
      </a>
    </div>
  )
}
