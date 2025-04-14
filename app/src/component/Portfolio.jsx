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
                <ButtonStyled onClick={handleClickSound} ><img src={CloseIcon} alt="닫기"/></ButtonStyled>
            </TitleBox>
            <p>
                안녕하세요? 디자이너 겸 퍼블리셔 입니다.<br/>
                Adobe Photoshop부터 프로토타이핑이 가능한 Figma까지<br/>
            HTML/CSS 마크업,<br/>
            React 프레임워크 환경에서 퍼블리싱 가능합니다.
            </p>
        </>
    )
}
