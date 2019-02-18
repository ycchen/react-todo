import React from 'react'

export default function Title({todos}) {
  return (
    <div>
      <h1>To do ({todos.length})</h1>
    </div>
  )
}
