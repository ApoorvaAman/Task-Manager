import TodolistItem from './TodoListItem'

interface TodoListProps {
  todos: Todo[]
  toggleTodo: ToggleTodo
}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => {
        return <TodolistItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      })}
    </ul>
  )
}

export default TodoList
