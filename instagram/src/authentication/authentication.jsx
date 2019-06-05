import React from 'react';

const withAuthenticate = (Component) => (ComponentTwo) => {
    return class extends React.Component { 
        constructor(props) {
            super(props);
            this.state = {
                newLogin: '',
                userInput: '',
                passwordInput: '',
                
            }
        } 

        addNewUser = () => {
            if(this.state.passwordInput.length >= 8) {
                localStorage.setItem('usernameData', this.state.userInput);
                localStorage.setItem('passwordData', this.state.passwordInput);
                const getUser = localStorage.getItem('usernameData');
                const getPassword = localStorage.getItem('passwordData');
                this.setState({
                    newLogin: getUser,
                    passwordInput: getPassword
                });
            }      
        }

        userInputHandler = event => {
            this.setState({
                userInput: event.target.value,
            })
        }

        passwordInputHandler = event => {
            this.setState({
                passwordInput: event.target.value,
            })
        }

        render() {
            return (
                <div>
                    {
                        this.state.newLogin !== '' && this.state.passwordInput !== '' ?
                        <Component 
                            username={this.state.newLogin}
                            {...this.props}/>
                        : <ComponentTwo 
                            userInputHandler={this.userInputHandler} 
                            passwordInputHandler={this.passwordInputHandler}
                            onClick={this.addNewUser} 
                            {...this.props}/>
                            
                    }
                </div>
            );
        }
    };
}

export default withAuthenticate;