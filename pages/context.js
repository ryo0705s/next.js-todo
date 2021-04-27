import React, { createContext, useContext } from 'react'

function context ({children}) {
    // const { test, teston } = useContext(TestContext)
    // const router = useRouter();
    const [valueTodo, setValueTodo] = useState('')
    const [valueLimit, setValueLimit] = useState('')
    // const [valueState, setValueState] = useState('')
    const [states, setStates] = useState([])
    // const todos = [valueTodo, valueLimit, valueState]
    const addTodo= text => {
      const newTodo = [...states, {text, complete: false, edit: false}]
      setStates(newTodo)
    }
    const handleSubmit = e => {
      e.preventDefault()
      addTodo([valueTodo, valueLimit])
      // console.log(handleSubmit)
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
      // console.log({changeStates})
    }
    const cancelStates = () => {
      setValueTodo('')
      setValueLimit('')
    }
    const editStates = index => {
      // router.push({
      //   pathname:"/edit",
      //   query: {state :state} 
      // });
      const newTodo = [...states]
      newTodo[index].edit = !newTodo[index].edit
      setStates(newTodo)
      // console.log({editStates})
    } 
    const updateStates = e => {
      // state.value
      return(<div>{e.target.value}</div>)
      console.log(e.target.value)
    }
    const TodoContext = createContext()
    const LimitContext = createContext()
    const StatesContext = createContext()
    const OtherContext = createContext()
    
    return (
    <TodoContext.Provider value={{valueTodo, setValueTodo}}>
    <LimitContext.Provider value={{valueLimit, setValueLimit}}>
    <StatesContext.Provider value={{states, setStates}}>
    <OtherContext.Provider value={
      addTodo,
      handleSubmit,
      deleteStates,
      changeStates,
      cancelStates,
      editStates
    }>
      {children}
    </OtherContext.Provider>
    </StatesContext.Provider>
    </LimitContext.Provider>
    </TodoContext.Provider>
)
}
export default context;
