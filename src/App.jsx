// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
    const [inputValue, setinputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addItem = () => {
        console.log('Complete', inputValue);
        setTodoList([...todoList, inputValue]);
        setinputValue("");
    };

    const deleteItem = (id) => {
        setTodoList(todoList.filter((todo, index) => index !== id));
    };

    return (
        <main>
            <input
                style={{ color: 'white', padding: 10 }}
                value={inputValue}
                type="text"
                onChange={(event) => setinputValue(event.target.value)}
            />
            <button
                style={{
                    color: 'white',
                    padding: 10,
                    margin: 10,
                }}
                onClick={addItem}
            >
                추가
            </button>
            <TodoBoard todoList={todoList} deleteItem={deleteItem} />
        </main>
    );
}

export default App;
