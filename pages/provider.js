import React, { useState } from 'react'
export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
const [valueTodo, setValueTodo] = useState('')
  const [valueLimit, setValueLimit] = useState('')
  // const [valueState, setValueState] = useState('')
  const [states, setStates] = useState([])
  // const todos = [valueTodo, valueLimit, valueState]
  const addTodo= text => {
    const newTodo = [...states, {text, complete: false}]
    setStates(newTodo)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addTodo([valueTodo, valueLimit])
  }
  const deleteStates = index => {
    const newTodo = [...states]
    newTodo.splice(index, 1)
    setStates(newTodo)
  }
  const changeStates = index => {
    const newTodo = [...states]
    newTodo[index].complete = !newTodo[index].complete
    setStates(newTodo)
    console.log({changeStates})
  }
  const cancelStates = () => {
    setValueTodo('')
    setValueLimit('')
  }
  const editStates = () => {
    // router.push({
    //   pathname:"/edit",
    //   query: {state :state} 
    // });
    const newTodo = [...states]
    setStates(newTodo)
    console.log({editStates})
  }
  return (
    <AppContext.Provider
    value={{
      valueTodo,
      valueLimit,
      states,
      addTodo: addTodo,
      handleSubmit: handleSubmit,
      deleteStates: deleteStates,
      changeStates: changeStates,
      cancelStates: cancelStates,
      editStates: editStates
    }}>
    {children}   
    </AppContext.Provider>
  )
}
  