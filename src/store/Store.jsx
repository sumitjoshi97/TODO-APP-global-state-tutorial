import React, { createContext, useReducer } from 'react'

const initialState = {
  todos: [],
}

export const Store = createContext(initialState)

const addTodo = (state, todoText) => {
  const newTodo = {
    id:
      (state.todos.length > 0 && state.todos[state.todos.length - 1].id + 1) ||
      0,
    text: todoText,
    tag: 'active',
  }
  return { ...state, todos: [...state.todos, newTodo] }
}

const removeTodo = (state, todoId) => {
  const newTodos = state.todos.filter(todo => todo.id !== todoId)
  return { ...state, todos: newTodos }
}

const editTodoTag = (state, todoId, tag) => {
  const todo = state.todos.find(todo => todo.id === todoId)
  const todoIndex = state.todos.indexOf(todo)
  const newTodo = { ...todo, tag }

  const newTodos = state.todos
    .slice(0, todoIndex)
    .concat(newTodo)
    .concat(state.todos.slice(todoIndex + 1))
  return { ...state, todos: newTodos }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.todoText)
    case 'REMOVE_TODO':
      return removeTodo(state, action.todoId)
    case 'EDIT_TODO_TAG':
      return editTodoTag(state, action.todoId, action.tag)
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
