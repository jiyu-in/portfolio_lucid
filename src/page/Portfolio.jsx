import React from "react";
import {TitleBox, ButtonStyled} from '../component/Styled';
import CloseIcon  from '../assets/CloseIcon.png';
import clickSound from '../assets/click.wav';



export default function Portfolio({title}) {
 const handleClickSound = () => {
        const audio = new Audio(clickSound);
        audio.play();
    };
    return (
        <>
            <TitleBox>
                <h2>{title}</h2>
                {/* <ButtonStyled onClick={handleClickSound} ><img src={CloseIcon} alt="닫기"/></ButtonStyled> */}
            </TitleBox>
            <p>
            
            </p>
        </>
    )
}
