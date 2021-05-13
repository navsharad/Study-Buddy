import React, {useState} from 'react';
import './homeStyles.css';
import logo from '../../assets/logo.png';
import Login from '../../components/LogIn/LoginModal';
import LoginModal from '../../components/LogIn/LoginModal';

const Home = () => {
    const [displayLoginModal, setdisplayLoginModal] = useState(false);

    const toggleLoginModal = () => {
        setdisplayLoginModal(!displayLoginModal);
    }

    return (
        <main className="home-container">
            <div className="home-body">
                <img className="home-logo" src={logo} alt="Study Buddy"/>
                <div className="home-content">
                    <h3 className="home-description">A tool for organizing and staying up-to-date with all of your schoolwork. Track and manage upcoming deadlines for assignments, get reminders for exams, and receive email notifications and weekly time tables of things that need to be done. </h3>
                    <form className="sign-up-form">
                        <p>Get Started Now!</p>
                    <input type="text" name="" id="" placeholder="Email"/>
                    <input type="text" name="" id="" placeholder="Username"/>
                    <input type="text" name="" id="" placeholder="Password"/>
                    <button className="sign-up-button home-button">Sign Up</button>
                    <button className="log-in-button home-button" onClick={toggleLoginModal}>Already Registered? Sign In</button>
                </form>
                </div>
            </div>
            {displayLoginModal && <LoginModal toggleLoginModal={toggleLoginModal}/>}
        </main>
    )
}

export default Home;
