import { FunctionComponent } from 'react'
import TodolistItem from './TodoListItem'

interface TodoListProps {
  todos: Todo[]
  toggleTodo: ToggleTodo
}

const TodoList: FunctionComponent<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodolistItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      })}
    </ul>
  )
}

export default TodoList
