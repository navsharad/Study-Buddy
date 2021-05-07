import React from 'react';
import './todoStyles.css';

const Todo = ({taskName, className, dueDate}) => {
    return (
        <div className="todo-container">
            <h3>{taskName}</h3>
            <h5>{className}</h5>
            <p>{dueDate}</p>
        </div>
    )
}

export default Todo;
