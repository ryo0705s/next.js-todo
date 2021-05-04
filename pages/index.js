// import Head from 'next/head'
// import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import React, { useState, useContext } from 'react'
// import { TestContext } from './_app'
export const AppContext = React.createContext()

function Home () {
  // const { test, teston } = useContext(TestContext)
  // const router = useRouter();
  const [valueTodo, setValueTodo] = useState('')
  const [valueLimit, setValueLimit] = useState('')
  const [states, setStates] = useState([])
  const [edit, setEdit] = useState({text: ['', '']})

  const addTodo= text => {
    const newTodo = [...states, {text, complete: false, edit: false}]
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
  // const editStates = index => {
  //   // router.push({
  //   //   pathname:"/edit",
  //   //   query: {state :state} 
  //   // });
  //   const newTodo = [...states]
  //   newTodo[index].edit = !newTodo[index].edit
  //   setStates(newTodo)
  // } 
  const editStates = (state) => {
    setEdit(state)
    console.log(state)
  } 
  // const updateValues = e => {
  //   const newTodo = [...states]
  //   newTodo[0] = {text: e.target.value, complete: false, edit: false}
  //   setStates(newTodo)
  // }
  // const updateLimits = e => {
  //   const newTodo = [...states]
  //   newTodo[0] = {text: e.target.value, complete: false, edit: false}
  //   setStates(newTodo)
  // }
  return (
    <>
    <Layout>
    <Head>
      <title>todoアプリ</title>
    </Head>
    <h1>ToDoリスト</h1>
    <Image 
      src='/images/profile.jpg' 
      height={180}
      width={180}
      alt='top画像' 
      />
    <div>やる事</div>
    <input value={valueTodo} onChange={e => setValueTodo(e.target.value)}/>
    <div>期限</div>
    <input value={valueLimit} onChange={e => setValueLimit(e.target.value)}/>
    <button onClick={handleSubmit}>追加</button>
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
            <td>
              {/* {state.edit ? <input type='text' value={state.text[0]} onChange={updateValues}/> : state.text[0]} */}
              {state.text[0]}
            </td>
            <td>
              {/* {state.edit ? <input type='text' value={state.text[1]} onChange={updateLimits}/> : state.text[1]} */}
              {state.text[1]}
            </td>
            <td>
              <button onClick={() => changeStates(index)}>
                {state.complete ? '完了' : '未完了'}
              </button>
            </td>
            <td>  
              {/* <Link href="/edit"> */}
                {/* <button onClick={() => editStates(index)}>編集</button>   */}
                <button onClick={() => editStates(state)}>編集</button>  
                {/* <button>編集</button>   */}
              {/* </Link> */}
            </td>
            <td>
              <button onClick={deleteStates}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <table>
      <thead>
          <h2>編集中</h2>
          <tr>
          <th>ID</th>
          <th>やること</th>
          <th>期限</th>
        </tr>
      </thead>
      <tbody>
        {/* {states && states.map((state, index) =>{ */}
        <tr>
          <td>{edit.text[0]}</td>  
          <td>{edit.text[1]}</td>
        </tr>
         {/* })} */}
      </tbody>
    </table>
    </Layout>
    </>
  )
}
export default Home