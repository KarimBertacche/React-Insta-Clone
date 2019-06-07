import React from 'react';
import instaLogo from '../../insta-writing.png'; 
import styled from 'styled-components';

const Button = styled.button` 
    border-radius: 3px;
    color: palevioletred;
    width: 100px;
    padding: 5px;
    background: transparent;
    border: 3px solid #dd2a7b;
    border-radius: 5px;
    color: #dd2a7b;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        border: 3px solid #dd2a7b;
        border-radius: 5px;
        background-color: #515bd4;
        color: #dd2a7b;
    }
`
const StylesLogin = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 350px;
    border: 3px solid #dd2a7b;
    border-radius: 5px;
    margin: 100px auto 0;
    box-shadow: 1px 1px 10px #000;

    figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: -15px;
    margin-bottom: 5px;

        & img {
            display: flex;
            justify-content: flex-start;
            width: 75%;
            margin-left: 0;
        } 
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        font-size: 2rem;

    }

    label {
        margin-bottom: 5px;
        color: #dd2a7b;
    }

    input{
        width: 200px;
        height: 25px;
        border: 3px solid #dd2a7b;
        border-radius: 5px;
        font-size: 1.6rem;
        padding: 0 5px;
        text-align: center;

        &:invalid {
            outline-color: #f00;
        }

        &:valid {
            outline-color: #0f0;
        }
    }
`;

function LoginPage(props) {
    return (
        <StylesLogin>
            <figure>
                <img src={instaLogo} alt="insta writing"/>
            </figure>
            <div>
                <label>Username</label>
                <input 
                    type="text" 
                    onChange={props.userInputHandler}
                    pattern=".{3,10}" 
                    required title="3 to 10 characters"/>
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    onChange={props.passwordInputHandler}
                    pattern=".{8,12}" 
                    required title="8 to 12 characters"/>
            </div>
            <Button onClick={props.onClick}>Login</Button>         
        </StylesLogin>
    );
}

export default LoginPage;