import React, {useState} from 'react';
import './homeStyles.css';
import logo from '../../assets/logo.png';
import Login from '../../components/LogIn/LoginModal';
import LoginModal from '../../components/LogIn/LoginModal';

const Home = ({createUser, logIn}) => {
    const [displayLoginModal, setdisplayLoginModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <input type="text" name="" id="" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                    <input type="text" name="" id="" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                    <input type="text" name="" id="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button className="sign-up-button home-button" onClick={() => createUser(firstName, lastName, email, password)}>Sign Up</button>
                    <button className="log-in-button home-button" onClick={toggleLoginModal}>Already Registered? Sign In</button>
                </form>
                </div>
            </div>
            {displayLoginModal && <LoginModal toggleLoginModal={toggleLoginModal} logIn={logIn}/>}
        </main>
    )
}

export default Home;
