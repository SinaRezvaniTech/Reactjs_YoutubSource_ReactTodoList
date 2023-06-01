import React, { createContext, useState } from 'react'
import sweetalert from 'sweetalert2'
//uuid
import { v4 as uuidv4 } from 'uuid'

export const context = createContext()

const ContextProvider = ({ children }) => {
  const [createMode, setCreateMode] = useState(true)

  const [editMode, setEditMode] = useState(false)

  //form
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [todos, setTodos] = useState([])

  //reset
  const resetStates = () => {
    setId('')
    setTitle('')
    setDes('')
  }
  //create
  const createTodo = () => {
    const oldTodos = [...todos]
    const newTodo = {
      id: uuidv4(),
      title,
      des,
    }
    oldTodos.push(newTodo)
    setTodos(oldTodos)
    sweetalert.fire('Success', 'Todo Created', 'success')

    resetStates()
  }

  //delete
  const deleteTodo = ({ id }) => {
    const oldTodos = [...todos]
    const newTodos = oldTodos.filter((i) => i.id !== id)
    setTodos(newTodos)
    sweetalert.fire('Success', 'Todo Deleted', 'success')

    resetStates()
  }

  //edit
  const editTodo = () => {
    const oldTodos = [...todos]
    const index = oldTodos.findIndex((i) => i.id == id)
    oldTodos[index] = {
      id,
      title,
      des,
    }
    setTodos(oldTodos)
    sweetalert.fire('Success', 'Todo Edited', 'success')

    resetStates()
    setEditMode(false)
  }

  const goToEditMode = ({ todo }) => {
    setId(todo.id)
    setTitle(todo.title)
    setDes(todo.des)

    setCreateMode(true)
    setEditMode(true)
  }

  return (
    <context.Provider
      value={{
        createMode,
        setCreateMode,
        title,
        setTitle,
        des,
        setDes,
        createTodo,
        todos,
        deleteTodo,
        id,
        setId,
        editTodo,
        goToEditMode,
        editMode,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default ContextProvider
