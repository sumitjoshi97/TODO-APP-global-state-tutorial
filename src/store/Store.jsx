import React, { createContext, useReducer } from 'react'

const initialState = {
  todos: [],
}

export const Store = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
