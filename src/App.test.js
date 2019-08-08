import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { StoreProvider } from './store/Store'
import App from './App'

afterEach(cleanup)

const renderComponent = state => {
  return render(
    <StoreProvider initialState={state}>
      <App />
    </StoreProvider>
  )
}

test('adds new todo in todo-list', () => {
  const { getByTestId, getByText } = renderComponent()

  const todoInput = getByTestId('todo-input')
  const submitTodoButton = getByTestId('todo-submit')

  fireEvent.change(todoInput, { target: { value: 'new todo' } })
  fireEvent.click(submitTodoButton)

  getByText('new todo')
})

test('clicking on todo changes the todo tag', () => {
  const state = {
    todos: [{ id: '0', text: 'new todo', tag: 'active' }],
  }

  const { getByTestId } = renderComponent(state)

  const todoItem = getByTestId('active')
  fireEvent.click(todoItem)

  getByTestId('complete')
})

test('clicking on remove button should remove the todo', () => {
  const state = {
    todos: [{ id: '0', text: 'new todo', tag: 'active' }],
  }

  const { getByTestId, queryByTestId } = renderComponent(state)

  const removeButton = getByTestId('remove-todo')
  fireEvent.click(removeButton)

  expect(queryByTestId('todo')).toBe(null)
})
