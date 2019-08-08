import React, { memo } from 'react'
import { editTag, removeTodo } from '../../store/Actions'

const Todo = memo(function Todo(props) {
  const { todoId, todoText, todoTag, dispatch } = props

  // set new todo tag - opposite of current tag
  const handleTodoTag = () => {
    const newTag = todoTag === 'active' ? 'complete' : 'active'
    editTag(todoId, newTag, dispatch)
  }

  // remove todo
  const handleRemoveTodo = () => {
    removeTodo(todoId, dispatch)
  }

  // set style of todo depending on todo tag -> `active` / `completed`
  const todoStyle = {
    color: (todoTag === 'complete' && '#90a4ae') || '#01579b',
    textDecoration: (todoTag === 'complete' && 'line-through') || 'none',
  }

  return (
    <div className="todo" data-testid="todo">
      <span style={todoStyle} onClick={handleTodoTag} data-testid={todoTag}>
        {todoText}
      </span>
      <button data-testid="remove-todo" onClick={handleRemoveTodo}>
        x
      </button>
    </div>
  )
})

export default Todo
