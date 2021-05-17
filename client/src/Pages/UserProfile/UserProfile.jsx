import react, {useState} from 'react';
import './userProfile.css';
import Overview from '../../tabs/Overview';
import MyClasses from '../../tabs/MyClasses';
import Deadlines from '../../tabs/Deadlines';
import MyProfile from '../../tabs/MyProfile';

const UserProfile = ({logOut, userClasses, addNewClass, tasks, addNewTask, removeTask, removeClass, userInfo}) => {
    const [currentTab, setCurrentTab] = useState(0);

    // responsible for changing the tabs once user clicks a differnt tab
    const changeTab = () => {
        if (currentTab == 0) return <Overview userClasses={userClasses} tasks={tasks} addNewClass={addNewClass} addNewTask={addNewTask} removeTask={removeTask} removeClass={removeClass}/>;
        if (currentTab == 1) return <MyClasses userClasses={userClasses} addNewClass={addNewClass} removeClass={removeClass}/>;
        if (currentTab == 2) return <Deadlines />;
        if (currentTab == 3) return <MyProfile userInfo={userInfo} />;
    }

    return (
        <div className="user-profile-container">
            <main className="main">
                <section className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img src={userInfo.profilePic} alt=""/>
                            <h3>{userInfo.name}</h3>
                            <p>Student</p>
                        </div>
                        <div className="links">
                            <ul>
                                <li onClick={() => setCurrentTab(0)}><a href="#">Overview</a></li>
                                <li onClick={() => setCurrentTab(1)}><a href="#">My Classes</a></li>
                                <li onClick={() => setCurrentTab(2)}><a href="#">Find Classmates!</a></li>
                                <li onClick={() => setCurrentTab(3)}><a href="#">My profile</a></li>
                            </ul>
                        </div>
                        <div className="signoff-btn" onClick={logOut}>
                            <p>Sign Out</p>
                        </div>
                    </div>
                    {/* component will display depending on the tab user has selected */}
                    <div className="tab-container">
                    {changeTab()}
                    </div>
                </section>
                
            </main>
        </div>
    )
}

export default UserProfile;