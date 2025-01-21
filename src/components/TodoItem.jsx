// eslint-disable-next-line no-unused-vars
import React from "react";

function TodoItem(props){
    return(
        <div className="todo-item" style={{textAlign: "center"}}>
            {props.item}
            <button onClick={() => props.deleteItem(props.id)}>✓</button>
        </div>
    )
}

export default TodoItem