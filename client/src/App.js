import react, {useState} from 'react';
import Home from './Pages/Home/Home';
import UserProfile from './Pages/UserProfile/UserProfile';
import { classes } from './classData.js';

const App = () => {
    const [isAuthenticated, setisAuthenticated] = useState(true);
    const [userInfo, setuserInfo] = useState({});
    const [userClasses, setUserClasses] = useState(classes)

    
    const addNewClass = (className, instructorName) => {
        setUserClasses(prevState => [...prevState, {className, instructorName}]);
    }


    // passed to UserProfile component so sign out button signs user out
    const logOut = () => {
        setisAuthenticated(false);
    }

    return (
        <div>
            {isAuthenticated ? <UserProfile userInfo={userInfo} userClasses={userClasses} addNewClass={addNewClass} logOut={logOut}/> : <Home/>}
        </div>
    )
}

export default App;