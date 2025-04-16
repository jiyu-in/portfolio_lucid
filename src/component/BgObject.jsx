import React from "react";
import styled  from 'styled-components';

const BgObjectStyled = styled.div`
    position: absolute;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    background-image: url(${(props) => `${props.bgUrl}`});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    z-index: -1;
`;


function BgObject() {

    const BASE_URL = import.meta.env.VITE_PUBLIC_URL;
    const bgImageUrl = `${BASE_URL}/images/BackgroundImage.png`;

    return (
        <BgObjectStyled bgUrl={bgImageUrl}/>
    )
}

export default BgObject