import styled from 'styled-components';
import StarTinyIcon from '../../public/assets/StarTinyIcon.png';

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
    @media (max-width: 960px) {
        & h2{
        font-size: 2.5rem;
    }
    }
`;
export const ButtonStyled = styled.button`
    background: none;
    border: 0 none ;
    padding: 0;
    margin: 0;
`;


export const TitleStyle = styled.h3`
   color:#ab6c35;
   background-image: url(${StarTinyIcon});
   background-repeat:no-repeat;
   background-position: left center;
   padding-left: 22px;
`;
export const DescStyle = styled.p`
   margin: 0;
`;
export const UlStyle = styled.ul`
   
`;

