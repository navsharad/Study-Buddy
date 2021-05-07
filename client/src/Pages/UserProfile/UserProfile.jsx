import react from 'react';
import './userProfile.css';
import profilePic from '../../assets/ken.jpg';
import moneyface from '../../assets/moneyface.png';

const UserProfile = () => {

    return (
        <div className="user-profile-container">
            <main>
                <section className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img src={profilePic} alt=""/>
                            <h3>Ken Ho</h3>
                            <p>Student</p>
                        </div>
                        <div className="links">
                            <ul>
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">My Classes</a></li>
                                <li><a href="#">Upcoming Deadlines</a></li>
                                <li><a href="#">My profile</a></li>
                            </ul>
                        </div>
                        <div className="promo">
                            <p>Support Us!</p>
                            <img src={moneyface} alt=""/>
                        </div>
                    </div>
                </section>
                
            </main>
        </div>
    )
}

export default UserProfile;