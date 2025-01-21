// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './App.css'
import TodoBoard from "./components/TodoBoard"

function App() {
  const [inputValue, setinputValue] = useState('')    
  const [todoList, setTodoList] = useState([])
    const addItem = () => {
      console.log("Complete", inputValue)
      setTodoList([...todoList, inputValue])
    }

    return (
        <main>
            <input value = {inputValue} type="text" onChange={(event) => setinputValue(event.target.value)}/>
            <button onClick={addItem}>추가</button>
        <TodoBoard todoList={todoList}/>
      </main>
  );
}

export default App;