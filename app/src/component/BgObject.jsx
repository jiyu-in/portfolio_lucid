import React from "react";
import styled  from 'styled-components';

const BgObjectStyled = styled.div`
    position: absolute;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    background-image: url('../public/images/BackgroundImage.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`;


function BgObject() {

    return (
        <BgObjectStyled/>
    )
}

export default BgObject