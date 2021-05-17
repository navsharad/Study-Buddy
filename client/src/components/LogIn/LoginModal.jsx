import React, {useState} from 'react';
import './loginModalStyles.css';
import exit from '../../assets/exit.png';

/*
 Login modal based on design by Niklesh Tiwane at https://freefrontend.com/css-input-text/
*/

const LoginModal = ({toggleLoginModal, logIn}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    return (
        <div>
            <div className="box">	
	<form>
		<span className="text-center">login</span>
	<div className="input-container">
		<input type="text" required="" value={username} onChange={(e) => setUsername(e.target.value)}/>
		<label>Username</label>		
	</div>
	<div className="input-container">		
		<input type="password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
		<label>Password</label>
	</div>
		<button type="button" className="btn" onClick={logIn}>Sign In</button>
		
</form>	
<img src={exit} alt="" className="login-exit-btn" onClick={toggleLoginModal}/>
</div>
        </div>
    )
}

export default LoginModal

