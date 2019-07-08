import React, { useContext } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Store } from './store/Store'
import './App.css'

export default function App() {
  const { state, dispatch } = useContext(Store)
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  )
}
