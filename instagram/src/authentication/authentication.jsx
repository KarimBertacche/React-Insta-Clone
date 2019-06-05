import React from 'react';

const withAuthenticate = (Component) => (ComponentTwo) => {
    return class extends React.Component { 
        constructor(props) {
            super(props);
            this.state = {
                newLogin: '',
                userInput: '',
            }
        } 

        addNewUser = () => {
            localStorage.setItem('usernameData', this.state.userInput);
            const getUser = localStorage.getItem('usernameData');
            this.setState({
                newLogin: getUser
            });
        }

        userInputHandler = event => {
            this.setState({
                userInput: event.target.value,
            })
        }

        render() {
            return (
                <div>
                    {
                        this.state.newLogin !== '' ?
                        <Component {...this.props}/>
                        : <ComponentTwo userInputHandler={this.userInputHandler} onClick={this.addNewUser} {...this.props}/>
                    }
                </div>
            );
        }
    };
}

export default withAuthenticate;