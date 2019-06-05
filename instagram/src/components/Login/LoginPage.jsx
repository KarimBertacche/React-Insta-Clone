import React from 'react';

function LoginPage(props) {
    return (
        <div>
            <input 
                type="text" 
                className="login-username" 
                onChange={props.userInputHandler}/>
            <input 
                type="password" 
                className="login-passWord" />
            <button onClick={props.onClick}>Login</button>
        </div>
    );
}

export default LoginPage;