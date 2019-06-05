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
                    onChange={props.userInputHandler}/>
            </div>
            <div className="password-wrapper">
                <label>Password</label>
                <input 
                    type="password" 
                    className="login-password" 
                    onChange={props.passwordInputHandler}/>
            </div>
            <button onClick={props.onClick}>Login</button>
        </div>
    );
}

export default LoginPage;