import react, {useState} from 'react';
import Home from './Pages/Home/Home';
import UserProfile from './Pages/UserProfile/UserProfile';

const App = () => {
    const [isAuthenticated, setisAuthenticated] = useState(true);
    const [userInfo, setuserInfo] = useState({});
    return (
        <div>
            {isAuthenticated ? <UserProfile userInfo={userInfo}/> : <Home/>}
        </div>
    )
}

export default App;