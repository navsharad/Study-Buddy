import React from 'react';
import './loginModalStyles.css';
import exit from '../../assets/exit.png';

/*
 Login modal based on design by Niklesh Tiwane at https://freefrontend.com/css-input-text/
*/

const LoginModal = ({toggleLoginModal}) => {
    return (
        <div>
            <div className="box">	
	<form>
		<span className="text-center">login</span>
	<div className="input-container">
		<input type="text" required=""/>
		<label>Username</label>		
	</div>
	<div className="input-container">		
		<input type="password" required=""/>
		<label>Password</label>
	</div>
		<button type="button" className="btn">Sign In</button>
		
</form>	
<img src={exit} alt="" className="login-exit-btn" onClick={toggleLoginModal}/>
</div>
        </div>
    )
}

export default LoginModal

