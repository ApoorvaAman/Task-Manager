interface TodolistItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodolistItem = ({ todo, toggleTodo }: TodolistItemProps) => {
  return (
    <li className='todo-item'>
      <label id='todo' className={todo.complete ? 'complete' : ''}>
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
