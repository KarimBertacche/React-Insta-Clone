import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
        }
    }

    userInputHandler = event => {
        this.setState({
            userInput: event.target.value,
        })
    }

    clickLoginHandler = () => {
        localStorage.setItem('usernameData', this.state.userInput);
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    className="login-username" 
                    onChange={this.userInputHandler}/>
                <input 
                    type="password" 
                    className="login-passWord" />
                <button onClick={this.clickLoginHandler}>Login</button>
            </div>
        );
    }
}

export default LoginPage;