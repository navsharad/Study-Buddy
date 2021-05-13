import React, {useState} from 'react';
import './myClassesStyles.css';
import ClassComponent from '../components/Class/ClassComponent';
import AddClassModal from '../components/Class/AddClassModal';

const MyClasses = ({userClasses, addNewClass, removeClass}) => {
    const [addClassModal, setaddClassModal] = useState(false);

    const toggleModal = () => {
        setaddClassModal(!addClassModal);
    }

    return (
        <main className="myClasses-container">
            <h1 className="myClasses-title">
                My Classes
            </h1>
                <div className="class-list">
                    {userClasses.map((userClass, index) => <ClassComponent key={index} userClass={userClass} removeClass={removeClass}/>)}
                </div>
                <button className="add-class-btn" onClick={toggleModal}>Add New Class</button>
                {addClassModal && <AddClassModal addNewClass={addNewClass} toggleModal={toggleModal} />}
        </main>
    )
}

export default MyClasses;
