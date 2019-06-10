import React from 'react';

const withAuthenticate = (Component) => (ComponentTwo) => {
    return class extends React.Component { 
        constructor(props) {
            super(props);
            this.state = {
                newLogin: '',
                userInput: '',
                passwordInput: '',  
                logged: false       
            }
        } 

        addNewUser = () => {
            if(this.state.passwordInput.length >= 8 && this.state.passwordInput !== '') {
                localStorage.setItem('usernameData', this.state.userInput);
                localStorage.setItem('passwordData', this.state.passwordInput);      
                const getUser = localStorage.getItem('usernameData');
                const getPassword = localStorage.getItem('passwordData');
                const loggedUser = true;
                this.setState({
                    newLogin: getUser,
                    passwordInput: getPassword,
                    logged: loggedUser
                });

                localStorage.setItem('userLogged', JSON.stringify(loggedUser));   
                let userLoggedIn = JSON.parse(localStorage.getItem('userLogged'));
                this.setState({
                    logged: userLoggedIn,  
                })
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

        componentDidUpdate(prevProps, prevState) {
            localStorage.setItem('userLogged', JSON.stringify(prevState.logged));
        }

        render() {
            return (
                <div>
                    {
                        !!this.state.logged && this.state.newLogin !== '' ?
                            <Component 
                                username={this.state.newLogin}
                                {...this.props}/>
                            : <ComponentTwo 
                                userInputHandler={this.userInputHandler} 
                                passwordInputHandler={this.passwordInputHandler}
                                onClick={this.addNewUser} 
                                {...this.props}/>
                        }
                    }
                </div>
            );
        }
    };
}

export default withAuthenticate;