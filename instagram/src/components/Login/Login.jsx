import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
        }
    }

    clickLoginHandler = () => {
        
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('usernameData', prevState.userInput);
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    className="login-username" />
                <input 
                    type="password" 
                    className="login-passWord" />
                <button onClick={this.clickLoginHandler}>Login</button>
            </div>
        );
    }
}