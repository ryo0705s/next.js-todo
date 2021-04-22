// import { useRouter } from 'next/router';
import React, { useState } from 'react'
// import Head from 'next/head'
// import Link from 'next/link’
import Home from './index'
import { AppContext } from './index'
export default function edit() {
  return (
    <>
    <Home>
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
    </Home>
    </>
  )}
  