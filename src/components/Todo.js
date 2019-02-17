import React from 'react'

export default function Todo() {
  return (
    <div>
      <a href="#" 
        className="list-group-item" 
        onClick={() => {console.log('clicked')}}>
          Todo 1: test
      </a>
    </div>
  )
}
