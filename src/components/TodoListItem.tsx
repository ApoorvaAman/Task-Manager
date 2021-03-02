import { FunctionComponent } from 'react'

interface TodolistItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodolistItem: FunctionComponent<TodolistItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className='li-item'>
      <label className={todo.complete ? 'complete' : undefined}>
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  )
}
export default TodolistItem
