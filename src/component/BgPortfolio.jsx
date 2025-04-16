import React from "react";
import styled  from 'styled-components';

const BgObjectStyled = styled.div`
    position: absolute;
    width: 90%;
    height: 90%;
    background-image: url(../public/images/BgSectionPortfolio.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
`;


function BgPortfolio() {

    return (
        <BgObjectStyled/>
    )
}

export default BgPortfolio