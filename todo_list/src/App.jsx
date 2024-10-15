// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './App.css'
import TodoBoard from "./components/TodoBoard"

//1. 인풋창과 버튼을 생성
//2. 인풋창에 값을 입력 후 버튼을 클릭 시 아이템이 추가됨

//3. 아이템 삭제버튼을 누르면 삭제도 가능.  -> 처음 하는 리엑트 프로젝트라서 아이디어는 있는데 코드를 짜지 못함.

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