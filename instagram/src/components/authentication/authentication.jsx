import React from 'react';

function withAuthenticate(Component) {
    return class extends React.Component {
        
        render() {
            return (
                <Component />
            );
        }
    };
}