import React from 'react';
import './LoginPage.css';

function LoginPage(props) {
    return (
        <div className="login-wrapper">
            <div className="username-wrapper">
                <label>Username</label>
                <input 
                    type="text" 
                    className="login-username" 
                    onChange={props.userInputHandler}
                    pattern=".{3,10}" 
                    required title="8 to 12 characters"/>
            </div>
            <div className="password-wrapper">
                <label>Password</label>
                <input 
                    type="password" 
                    className="login-password" 
                    onChange={props.passwordInputHandler}
                    pattern=".{8,12}" 
                    required title="8 to 12 characters"/>
            </div>
            <button onClick={props.onClick}>Login</button>
        </div>
    );
}

export default LoginPage;