import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react'

interface AddTodoFormProps {
  addTodo: AddTodo
}

const AddTodoForm: FunctionComponent<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }
  return (
    <form className='add-todo-form'>
      <label htmlFor='todo'>
        <input type='text' value={newTodo} onChange={handleChange} id='todo' />
      </label>
      <button type='submit' onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodoForm
