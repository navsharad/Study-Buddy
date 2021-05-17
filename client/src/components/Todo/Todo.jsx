import React from 'react';
import './todoStyles.css';
import check from '../../assets/check.png';

const Todo = ({task, removeTask}) => {
    return (
        <div className="todo-wrapper">
        <div className="todo-container">
            <h3>{task.taskName}</h3>
            <h5>{task.courseName}</h5>
            <p>{task.dueDate}</p>
        </div>
            <img src={check} alt="" onClick={() => removeTask(task.taskName)}/>
        </div>
    )
}

export default Todo;
