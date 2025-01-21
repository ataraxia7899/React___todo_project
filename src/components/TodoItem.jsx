// eslint-disable-next-line no-unused-vars
import React from "react";

function TodoItem(props){
    
    return(
        <div className="todo-item">
            {props.item}
            <button>✓</button>
        </div>
    )
}

export default TodoItem