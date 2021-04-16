import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {
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
    
  }
    return (
    <>
    <h1>ToDoリスト</h1>
    <div>やる事</div>
    <input value={valueTodo} onChange={e => setValueTodo(e.target.value)}/>
    <div>期限</div>
    <input value={valueLimit} onChange={e => setValueLimit(e.target.value)}/>
    {/* <div>状態</div>
    <input value={valueState} onChange={e => setValueState(e.target.value)}/> */}
    <button value={addTodo} onClick={handleSubmit}>追加</button>
    <button onClick={cancelStates}>キャンセル</button>
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
            {/* <td>{state.text[0]}</td> */}
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
              <button onClick={editStates}>編集</button>
            </td>
            <td>
              <button onClick={deleteStates}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
