import React from 'react';
import './loginModalStyles.css';

/*
 Login modal based on design by Niklesh Tiwane at https://freefrontend.com/css-input-text/
*/

const LoginModal = () => {
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
</div>
        </div>
    )
}

export default LoginModal

