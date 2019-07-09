import React, { useState, useContext } from 'react'
import { addTodo } from '../../store/Actions'
import { Store } from '../../store/Store'

export default function TodoForm() {
  const { dispatch } = useContext(Store)
  const [todo, setTodo] = useState('')

  const handleTodoInput = e => {
    setTodo(e.target.value)
  }

  // submits todo to context store and set todo form input to blank
  const handleTodoSubmit = e => {
    e.preventDefault()
    todo.trim().length > 0 && addTodo(todo, dispatch)
    setTodo('')
  }

  return (
    <form onSubmit={handleTodoSubmit} className="todo-form">
      <input type="text" value={todo} onChange={handleTodoInput} />
      <button type="submit">Add Todo</button>
    </form>
  )
}
