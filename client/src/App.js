import react, {useState} from 'react';
import Home from './Pages/Home/Home';
import UserProfile from './Pages/UserProfile/UserProfile';
import { classes } from './classData.js';
import { tasks } from './taskData.js';
import { users } from './userData';
import ClassService from './services/ClassService';

const App = () => {
    const [isAuthenticated, setisAuthenticated] = useState(true);
    const [userInfo, setuserInfo] = useState(users);
    const [userClasses, setUserClasses] = useState(classes);
    const [userTasks, setUserTasks] = useState(tasks);

    const fetchClasses = () => {
        ClassService.getClasses().then((res) => {
          setUserClasses(res.data);  
        })
    }

    
    const addNewClass = (className, instructorName) => {
        setUserClasses(prevState => [...prevState, {className, instructorName}]);
    }

    const addNewTask = (taskName, className, dueDate) => {
        setUserTasks(prevState => [...prevState, {taskName, className, dueDate}]);
    }

    const removeClass = (className) => {
        let filteredClasses = userClasses.filter(userClass => userClass.className != className);
        setUserClasses(filteredClasses);
    }

    const removeTask = (taskName) => {
        let filteredTasks = userTasks.filter(task => task.taskName != taskName);
        setUserTasks(filteredTasks);
    }


    // passed to UserProfile component so sign out button signs user out
    const logOut = () => {
        setisAuthenticated(false);
    }

    return (
        <div>
            {isAuthenticated ? <UserProfile 
                userInfo={userInfo} 
                userClasses={userClasses} 
                addNewClass={addNewClass} 
                removeClass={removeClass}
                tasks={userTasks} 
                addNewTask={addNewTask} 
                removeTask={removeTask}
                logOut={logOut}/> : <Home/>}
        </div>
    )
}

export default App;