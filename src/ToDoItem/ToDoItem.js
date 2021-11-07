import React from "react";


const ToDoItem = (props) => {
    return (
        <div className="todo-item">
            <div className="description-wrepper">
                <p>{props.description}</p>
            </div>
            <div className="input-wrapper">
                <input type="checkbox" defaultChecked={props.completed}
                onChange={props.handleChange}
                />
            </div>
        </div>
    )
}

export default ToDoItem