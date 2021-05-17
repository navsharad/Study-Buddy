import React from 'react';
import './classComponentStyles.css';
import removeButton from '../../assets/exit.png';

const ClassComponent = ({userClass, removeClass}) => {
    console.log(userClass)
    return (
        <div className="class-wrapper">
            <div className="class-container">
                <h3>{userClass.courseName}</h3>
                <h5>{userClass.instructorName}</h5>
            </div>
            <img src={removeButton} alt="" onClick={() => removeClass(userClass.courseName)}/>
        </div>
    )
}

export default ClassComponent;
