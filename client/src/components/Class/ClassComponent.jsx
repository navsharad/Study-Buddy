import React from 'react';
import './classComponentStyles.css';

const ClassComponent = ({className, instructorName, }) => {
    return (
        <div className="class-container">
            <h3>{className}</h3>
            <h5>{instructorName}</h5>
        </div>
    )
}

export default ClassComponent;
