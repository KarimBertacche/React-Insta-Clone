import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
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
                <button onClick={this.props.onClick}>Login</button>
            </div>
        );
    }
}

export default LoginPage;