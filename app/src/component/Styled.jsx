import styled from 'styled-components';

export const TitleBox = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom:1.25rem;
    & h2{
        display: inline-block;
        font-size: 4rem;
        color: #F88960;
        margin: 0;
        text-shadow: 0px 5px 0px #5E3235, -2px 0px #5E3235, 2px 0px #5E3235, 0px -2px #5E3235;
    }
`;
export const ButtonStyled = styled.button`
    background: none;
    border: 0 none ;
    padding: 0;
    margin: 0;
`;
