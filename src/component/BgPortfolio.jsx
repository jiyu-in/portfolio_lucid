import React from "react";
import styled  from 'styled-components';

const BgObjectStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => `${props.bgUrl}`});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
`;


function BgPortfolio() {
    
    const BASE_URL = import.meta.env.VITE_PUBLIC_URL;
    const bgImageUrl = `${BASE_URL}/images/BgSectionPortfolio.png`;

    return (
        <BgObjectStyled bgUrl={bgImageUrl}/>
    )
}

export default BgPortfolio