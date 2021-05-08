import React, {useState} from 'react';
import './addClassModalStyles.css';

const AddClassModal = ({addNewClass, toggleModal}) => {
    const [className, setclassName] = useState("");
    const [instructorName, setinstructorName] = useState("");

    return (
        <div className="add-class-overlay">
            <div className="add-class-form">
            <h1>Add New Class</h1>
            <article>
            <label htmlFor="className">Class Name: </label>
            <input type="text" value={className} onChange={(e) => setclassName(e.target.value)}/>
            </article>
            <article>
            <label htmlFor="instructorName">Instructor Name: </label>
            <input type="text" value={instructorName} onChange={(e) => setinstructorName(e.target.value)}/>
            </article>
            <button className="add-class-btn" onClick={() => {addNewClass(className, instructorName); toggleModal()}}>Add Class</button>
        </div>
        </div>

    )
}

export default AddClassModal;
