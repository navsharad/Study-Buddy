import react, {useState} from 'react';
import Home from './Pages/Home/Home';
import UserProfile from './Pages/UserProfile/UserProfile';

const App = () => {
    const [isAuthenticated, setisAuthenticated] = useState(true);
    const [userInfo, setuserInfo] = useState({});

    // passed to UserProfile component so sign out button signs user out
    const logOut = () => {
        setisAuthenticated(false);
    }

    return (
        <div>
            {isAuthenticated ? <UserProfile userInfo={userInfo} logOut={logOut}/> : <Home/>}
        </div>
    )
}

export default App;