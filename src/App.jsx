import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  )
}
