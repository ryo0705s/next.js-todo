import React, { useState } from 'react'
// import Head from 'next/head'
// import Link from 'next/link’
export default function edit() {
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
  }
  const cancelStates = () => {
    setValueTodo('')
    setValueLimit('')
  }
  const editStates = () => {
    const newTodo = [...states]
    setStates(newTodo)
  }
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>やる事</th>
          <th>期限</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>
        {states && states.map((state, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <input value={state.text[0]} />
            </td>
            <td>{state.text[1]}</td>
            {/* <td>{state[2]}</td> */}
            <td>
              {/* <button onClick={changeStates}> */}
              {/* <button onClick={ index => changeStates}> */}
              <button onClick={() => changeStates(index)}>
                {state.complete ? '完了' : '未完了'}
              </button>
            </td>
            <td>
              <button onClick={deleteStates}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )}
  