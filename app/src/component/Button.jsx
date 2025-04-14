import React from 'react';
import styled from 'styled-components';
import clickSound from '../assets/click.wav';

const StyledButton = styled.a`
    width: fit-content;
    color:#fff;
    font-size: 1.5rem;
    font-weight: 800;
    text-decoration: inherit;
    padding: 0.6em 1.2em;
    background: #EC6A6E;
    background: linear-gradient(180deg,rgba(236, 106, 110, 1) 0%, rgba(221, 92, 96, 1) 100%);
    box-shadow: rgba(0, 0, 0, 0.25) 4px 0 4px, rgba(134, 9, 12, 0.4) 0 4px 2px;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.1s ease;
    &:hover{
        /* background: linear-gradient(180deg,#d05c60 0%, rgba(203, 90, 93, 1) 100%); */
        color:#ffffffd0
    }
    &:active{
        box-shadow:inset 0px 6px 5px rgba(0, 0, 0, 0.25);
        border: 0 none;
    }
`;

const Button = ({ text = 'Click' }) => {
    const handleClickSound = () => {
        const audio = new Audio(clickSound);
        audio.play();
    };

    return <StyledButton onClick={handleClickSound} href="mailto:jyin2205@naver.com">{text}</StyledButton>;
};

export default Button;
