import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import React, { useState, useEffect } from "react";
export const AppContext = React.createContext();

function Home() {
  const [valueTodo, setValueTodo] = useState("");
  const [valueLimit, setValueLimit] = useState("");
  const [states, setStates] = useState([]);
  const [edit, setEdit] = useState({ text: ["", ""], edited: false });
  const [editValue, setEditValue] = useState({ text: "" });
  const [editLimit, setEditLimit] = useState({ text: "" });
  const [editId, setEditId] = useState("");
  const [update, setUpdate] = useState({ text: ["", ""], updated: false });
  const [search, setSearch] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);

  const addTodo = (text) => {
    const newTodo = [
      ...states,
      { text, complete: false, edited: false, searched: false },
    ];
    setStates(newTodo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo([valueTodo, valueLimit]);
    setValueTodo("");
    setValueLimit("");
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
  const editStates = (state, index) => {
    setEdit(state);
    setEditId(index + 1);
    state.edited = !state.edited;
  };
  const handleUpdate = () => {
    const newEdit = { text: [editValue, editLimit], updated: true };
    setUpdate(newEdit);
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
            {search === ""
              ? states.map((state, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {update.updated && index === editId
                          ? update.text[0]
                          : state.text[0]}
                      </td>
                      <td>
                        {update.updated && index === editId
                          ? update.text[1]
                          : state.text[1]}
                      </td>
                      <td>
                        <button onClick={() => changeStates(index)}>
                          {state.complete ? "完了" : "未完了"}
                        </button>
                      </td>
                      <td>
                        <button onClick={() => editStates(state, index)}>
                          編集
                        </button>
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
                      <td>{state.text[0]}</td>
                      <td className={states.searched ? "searched" : null}>
                        {state.text[1]}
                      </td>
                      <td>
                        <button onClick={() => changeStates(index)}>
                          {state.complete ? "完了" : "未完了"}
                        </button>
                      </td>
                      <td>
                        <button onClick={() => editStates(state)}>編集</button>
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
            <tr>
              <td>{edit.edited && !update.updated ? editId : ""}</td>
              <td>
                {edit.edited && !update.updated ? (
                  <input
                    value={editValue.text}
                    placeholder={edit.text[0]}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                ) : (
                  ""
                )}
              </td>
              <td>
                {edit.edited && !update.updated ? (
                  <input
                    value={editLimit.text}
                    placeholder={edit.text[1]}
                    onChange={(e) => setEditLimit(e.target.value)}
                  />
                ) : (
                  ""
                )}
              </td>
              <td>
                {edit.edited && !update.updated ? (
                  <button onClick={handleUpdate}>更新</button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </Layout>
    </>
  );
}
export default Home;
