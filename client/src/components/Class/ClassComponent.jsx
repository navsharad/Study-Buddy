import React from 'react';
import './classComponentStyles.css';
import removeButton from '../../assets/exit.png';

const ClassComponent = ({userClass, removeClass}) => {
    console.log(userClass)
    return (
        <div className="class-wrapper">
            <div className="class-container">
                <h3>{userClass.className}</h3>
                <h5>{userClass.instructorName}</h5>
            </div>
            <img src={removeButton} alt="" onClick={() => removeClass(userClass.className)}/>
        </div>
    )
}

export default ClassComponent;
