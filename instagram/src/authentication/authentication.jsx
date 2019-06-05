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
    
        clickLoginHandler = () => {
            localStorage.setItem('usernameData', this.state.userInput);
        }

        render() {
            return (
                <div>
                    {
                        this.state.newLogin !== '' ?
                        <Component {...this.props}/>
                        : <ComponentTwo onClick={this.addNewUser} {...this.props}/>
                    }
                </div>
            );
        }
    };
}

export default withAuthenticate;