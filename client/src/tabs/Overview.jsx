import React from 'react';
import './overviewStyles.css';
import ClassComponent from '../components/Class/ClassComponent';
import Todo from '../components/Todo/Todo';

const Overview = ({userClasses}) => {
    return (
        <main className="overview-container">
            <h1 className="overview-title">
                Overview
            </h1>
            <section className="overview-content">
                <div className="classes-overview">
                    <h1>Classes</h1>
                    {userClasses.map((userClass, index) => <ClassComponent key={index} userClass={userClass}/>)}
                </div>
                <div className="todo-overview">
                    <h1>To-do List</h1>
                    <Todo {...{taskName: 'Finish project', className: 'CS 151', dueDate: 'May 11 at 11:59pm'}}/>
                    <Todo {...{taskName: 'Finish quiz', className: 'CS 151', dueDate: 'May 12 at 11:59pm'}}/>
                    <Todo {...{taskName: 'Final Exam', className: 'CS 151', dueDate: 'May 19 at 11:30am'}}/>
                    <Todo {...{taskName: 'revise essay', className: 'CS 156', dueDate: 'May 20 at 11:59pm'}}/>
                </div>
            </section>
        </main>
    )
}

export default Overview;
