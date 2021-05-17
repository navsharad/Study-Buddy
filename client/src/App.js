import react, {useState, useEffect} from 'react';
import Home from './Pages/Home/Home';
import UserProfile from './Pages/UserProfile/UserProfile';
import { classes } from './classData.js';
import { tasks } from './taskData.js';
import { users } from './userData';
import ClassService from './services/ClassService';
import TaskService from './services/TaskService';
import UserService from './services/UserService';

const App = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [userInfo, setuserInfo] = useState(users);
    const [userClasses, setUserClasses] = useState([]);
    const [userTasks, setUserTasks] = useState([]);

    const createUser = (firstName, lastName, email, password) => {
        let user = {id: 123, firstName, lastName, email, password};
        UserService.createUser(user);
    };

    const login = (username, password) => {
        // logs user in
    }

    const fetchClasses = () => {
            ClassService.getClasses().then((res) => {
              setUserClasses(res.data);  
            })
    }

    const fetchTasks = () => {
            TaskService.getTasks().then((res) => {
                setUserTasks(res.data);
            })
    }


    useEffect(() => {
        fetchClasses();
        fetchTasks();
        console.log('rerender')

    }, [isAuthenticated, userClasses, userTasks]);
    
    const addNewClass = (courseName, instructorName) => {
        let course = {id: 123, courseName, email: "yo@gmail.com", instructorName};
        ClassService.createClass(course);
        //setUserClasses(prevState => [...prevState, {courseName, instructorName}]);
    }

    const addNewTask = (taskName, courseName, dueDate) => {
        let task = {id: 123, courseName: courseName, dueDate: dueDate, email: "yoo@gmail.com", taskName: taskName};
        TaskService.createTask(task)
        //setUserTasks(prevState => [...prevState, {taskName, courseName, dueDate}]);
    }

    const removeClass = (id) => {
        let filteredClasses = userClasses.filter(userClass => userClass.courseName != id);
        setUserClasses(filteredClasses);
        ClassService.deleteClass(id);
    }

    const removeTask = (id) => {
        let filteredTasks = userTasks.filter(task => task.taskName != id);
        setUserTasks(filteredTasks);
        TaskService.removeTask(id);
    }

    // logs user in
    const logIn = () => {
        setisAuthenticated(true);
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
                logOut={logOut}/> : <Home createUser={createUser} login={login} logIn={logIn}/>}
        </div>
    )
}

export default App;