import React from 'react';

const withAuthenticate = (Component) => (ComponentTwo) => {
    return class extends React.Component { 
        constructor(props) {
            super(props);
            this.state = {
                newLogin: '',
            }
        }  

        componentDidMount() {
            const getUser = localStorage.getItem('usernameData');
            this.setState({
                newLogin: getUser
            });
        }

        render() {
            return (
                this.state.newLogin === '' ?
                <Component {...this.props}/>
                : <ComponentTwo {...this.props}/>
            );
        }
    };
}

export default withAuthenticate;