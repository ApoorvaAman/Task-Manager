import { FunctionComponent } from 'react'

interface TodolistItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodolistItem: FunctionComponent<TodolistItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className='todo-item'>
      <label id='todo' className={todo.complete ? 'complete' : undefined}>
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
