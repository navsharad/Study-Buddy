import React, {useState} from 'react';
import './overviewStyles.css';
import ClassComponent from '../components/Class/ClassComponent';
import Todo from '../components/Todo/Todo';
import addButton from '../assets/add.png';
import AddClassModal from '../components/Class/AddClassModal';
import AddTaskModal from '../components/Todo/AddTaskModal';

const Overview = ({userClasses, tasks, addNewTask, addNewClass, removeClass, removeTask}) => {
    const [addClassModal, setaddClassModal] = useState(false);
    const [addTaskModal, setAddTaskModal] = useState(false);

    const toggleAddClassModal = () => {
        setaddClassModal(!addClassModal);
    }

    const toggleAddTaskModal = () => {
        setAddTaskModal(!addTaskModal);
    }
    
    return (
        <main className="overview-container">
            <h1 className="overview-title">
                Overview
            </h1>
            <section className="overview-content">
                <div className="classes-overview">
                    <h1>Classes</h1>
                    { userClasses != 0 ? userClasses.map((userClass, index) => <ClassComponent key={index} userClass={userClass} removeClass={removeClass} />) : <p>You have no classes!</p>}
                    <img src={addButton} alt="" onClick={toggleAddClassModal}/>
                    {addClassModal && <AddClassModal addNewClass={addNewClass} toggleModal={toggleAddClassModal}/>}
                </div>
                <div className="todo-overview">
                    <h1>To-do List</h1>
                    {tasks != 0 ? tasks.map((task, index) => <Todo key={index} task={task} removeTask={removeTask}/>) : <p>You're all caught up!</p>}
                    <img src={addButton} alt="" onClick={toggleAddTaskModal}/>
                    {addTaskModal && <AddTaskModal addNewTask={addNewTask} toggleModal={toggleAddTaskModal}/>}
                </div>
            </section>
        </main>
    )
}

export default Overview;
