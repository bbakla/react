import React, {useContext, useState} from 'react'
import {ToDoContext} from "../ToDoAppWithUseReducer";


const AddTodo = () => {
  const [todoText, setTodoText] = useState('')
    const {addToDo} = useContext(ToDoContext);

  const onChange = e => setTodoText(e.target.value)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addToDo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo;
