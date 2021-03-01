import { FunctionComponent } from 'react'
import '../styles/TodoListItem.css'

interface TodolistItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodolistItem: FunctionComponent<TodolistItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type='checkbox' checked={todo.complete} onClick={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  )
}
export default TodolistItem
