// eslint-disable-next-line no-unused-vars
import react from 'react';
import TodoItem from './TodoItem';

function TodoBoard(props) {
    return (
        <div>
            <h1 style={{color: "orange"}}>Todo List</h1>
            {props.todoList.map((item, index) => (
                <TodoItem 
                    item={item} 
                    key={index} 
                    id={index} 
                    deleteItem={props.deleteItem} 
                />
            ))}
        </div>
    );
}

export default TodoBoard;