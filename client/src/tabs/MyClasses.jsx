import React from 'react';
import './myClassesStyles.css';
import ClassComponent from '../components/Class/ClassComponent';

const MyClasses = () => {
    return (
        <main className="myClasses-container">
            <h1 className="myClasses-title">
                My Classes
            </h1>
            <section className="myClasses-content">
                <div className="classes-overview">
                    <ClassComponent {...{className:'Biology', instructorName:'Dr James'}}/>
                    <ClassComponent {...{className:'Algebra', instructorName:'Dr Goddy'}}/>
                    <ClassComponent {...{className:'Gender Studies', instructorName:'Mr Smokerino'}}/>
                </div>
            </section>
        </main>
    )
}

export default MyClasses;
