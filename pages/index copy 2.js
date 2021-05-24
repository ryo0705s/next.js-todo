import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import React, { useState, useEffect, useContext } from "react";
export const AppContext = React.createContext();

function Home() {
  const [valueTodo, setValueTodo] = useState("");
  const [valueLimit, setValueLimit] = useState("");
  const [states, setStates] = useState([]);
  const [edit, setEdit] = useState({ text: ["", ""] });
  const [search, setSearch] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);

  const addTodo = (text) => {
    const newTodo = [
      ...states,
      { text, complete: false, edit: false, searched: false },
    ];
    setStates(newTodo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo([valueTodo, valueLimit]);
  };
  const deleteStates = (index) => {
    const newTodo = [...states];
    newTodo.splice(index, 1);
    setStates(newTodo);
  };
  const changeStates = (index) => {
    const newTodo = [...states];
    newTodo[index].complete = !newTodo[index].complete;
    setStates(newTodo);
  };
  const cancelStates = () => {
    setValueTodo("");
    setValueLimit("");
  };
  const editStates = (state) => {
    setEdit(state);
  };
  useEffect(() => {
    const newTodo = [...states];
    const newStates = newTodo.filter((state) => {
      return state.text.indexOf(search) !== -1;
    });
    setFilteredStates(newStates);
  }, [search]);
  return (
    <>
      <Layout>
        <Head>
          <title>todoアプリ</title>
        </Head>
        <h1>ToDoリスト</h1>
        <Image
          src="/images/profile.jpg"
          height={180}
          width={180}
          alt="top画像"
        />
        <div>やる事</div>
        <input
          value={valueTodo}
          onChange={(e) => setValueTodo(e.target.value)}
        />
        <div>期限</div>
        <input
          value={valueLimit}
          onChange={(e) => setValueLimit(e.target.value)}
        />
        <button onClick={handleSubmit}>追加</button>
        <button onClick={cancelStates}>キャンセル</button>
        <div>検索</div>
        <input onChange={(e) => setSearch(e.target.value)} />
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
            {!filteredStates
              ? states.map((state, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {/* {state.edit ? <input type='text' value={state.text[0]} onChange={updateValues}/> : state.text[0]} */}
                        {state.text[0]}
                      </td>
                      <td className={states.searched ? "searched" : null}>
                        {/* {state.edit ? <input type='text' value={state.text[1]} onChange={updateLimits}/> : state.text[1]} */}
                        {state.text[1]}
                      </td>
                      <td>
                        <button onClick={() => changeStates(index)}>
                          {state.complete ? "完了" : "未完了"}
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
                  );
                })
              : filteredStates.map((state, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {/* {state.edit ? <input type='text' value={state.text[0]} onChange={updateValues}/> : state.text[0]} */}
                        {state.text[0]}
                      </td>
                      <td className={states.searched ? "searched" : null}>
                        {/* {state.edit ? <input type='text' value={state.text[1]} onChange={updateLimits}/> : state.text[1]} */}
                        {state.text[1]}
                      </td>
                      <td>
                        <button onClick={() => changeStates(index)}>
                          {state.complete ? "完了" : "未完了"}
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
                  );
                })}
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
  );
}
export default Home;