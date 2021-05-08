import React from 'react';
import './classComponentStyles.css';

const ClassComponent = ({userClass}) => {
    console.log(userClass)
    return (
        <div className="class-container">
            <h3>{userClass.className}</h3>
            <h5>{userClass.instructorName}</h5>
            {/* <p>{ upcoming ? ("Upcoming: " + upcoming + " by " + dueDate) : "You're all caught up!"}</p> */}
        </div>
    )
}

export default ClassComponent;
