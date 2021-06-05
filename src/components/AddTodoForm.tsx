import { ChangeEvent, FormEvent, useState } from 'react'

interface AddTodoFormProps {
  addTodo: AddTodo
}

const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
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
      <label htmlFor='add-todo'>
        <input type='text' value={newTodo} onChange={handleChange} id='add-todo' />
      </label>
      <button className='add-button' type='submit' onClick={handleSubmit}>
        +
      </button>
    </form>
  )
}

export default AddTodoForm
