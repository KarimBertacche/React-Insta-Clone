import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    background-color: #fafafa;
    border-bottom: 3px solid #515bd4;

    section {
        width: 30px;
        height: 30px;
        border: 3px solid #515bd4;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
        margin-top: 10px;
        margin-right: 10px;
        margin-left: 15px;

        img {
            width: 100%;
        }
    }

    h2 {
        display: flex;
        align-items: center; 
    }
`;

function PostHeader(props) {
    return (
        <HeaderWrapper>
            <section className="thumbImg-wrapper">
                <img className="thumbnail-img" src={props.thumbnailUrl} alt="thumbnail"/>
            </section>
            <h2 className="post-user">{props.username}</h2>
        </HeaderWrapper>
    );
}

export default PostHeader;