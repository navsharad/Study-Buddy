import react, {useState} from 'react';
import './userProfile.css';
import profilePic from '../../assets/ken.jpg';
import moneyface from '../../assets/moneyface.png';
import Overview from '../../tabs/Overview';
import MyClasses from '../../tabs/MyClasses';

const UserProfile = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const changeTab = () => {
        if (currentTab == 0) return <Overview />;
        if (currentTab == 1) return <MyClasses />;
        if (currentTab == 2) return <Overview />;
        if (currentTab == 3) return <Overview />;
    }

    return (
        <div className="user-profile-container">
            <main className="main">
                <section className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img src={profilePic} alt=""/>
                            <h3>Ken Ho</h3>
                            <p>Student</p>
                        </div>
                        <div className="links">
                            <ul>
                                <li onClick={() => setCurrentTab(0)}><a href="#">Overview</a></li>
                                <li onClick={() => setCurrentTab(1)}><a href="#">My Classes</a></li>
                                <li onClick={() => setCurrentTab(2)}><a href="#">Upcoming Deadlines</a></li>
                                <li onClick={() => setCurrentTab(3)}><a href="#">My profile</a></li>
                            </ul>
                        </div>
                        <div className="signoff-btn">
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