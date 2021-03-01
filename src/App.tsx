import { useState, FunctionComponent } from 'react'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

const initialTodos: Todo[] = [
  { text: 'Write some code', complete: false },
  { text: 'Make React app', complete: false },
]
const App: FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <div className='todo-app'>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
