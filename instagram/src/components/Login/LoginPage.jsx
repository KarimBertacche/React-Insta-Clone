import React from 'react';
import './LoginPage.css';
import styled from 'styled-components';

const Button = styled.button` 
    border-radius: 3px;
    color: palevioletred;
    width: 100px;
    padding: 5px;
    background: transparent;
    border: 3px solid #dd2a7b;
    border-radius: 5px;
    color: #dd2a7b;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`

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
                    required title="3 to 10 characters"/>
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
            <Button onClick={props.onClick}>Login</Button>         
        </div>
    );
}

export default LoginPage;