import React, {useState} from 'react';
import './addTaskModalStyles.css';

const AddTaskModal = ({addNewTask, toggleModal}) => {
    const [taskName, setTaskName] = useState("");
    const [className, setClassName] = useState("");
    const [dueDate, setDueDate] = useState("");

    return (
        <div className="add-task-overlay">
            <div className="add-task-form">
            <h1>Add New Task</h1>
            <article>
            <label htmlFor="className">Task Name: </label>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
            </article>
            <article>
            <label htmlFor="className">Class Name: </label>
            <input type="text" value={className} onChange={(e) => setClassName(e.target.value)}/>
            </article>
            <article>
            <label htmlFor="dueDate">Due Date: </label>
            <input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
            </article>
            <button className="add-class-btn" onClick={() => {addNewTask(taskName, className, dueDate); toggleModal()}}>Add Task</button>
        </div>
        </div>

    )
}

export default AddTaskModal;