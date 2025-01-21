// eslint-disable-next-line no-unused-vars
import React from "react"
// eslint-disable-next-line no-unused-vars
import TodoItem from "./TodoItem"


// eslint-disable-next-line no-unused-vars
function TodoBoard(props) {


    return(
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard