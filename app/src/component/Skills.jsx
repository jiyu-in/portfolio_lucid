import React from "react";
import styled from 'styled-components';
import {TitleBox, ButtonStyled} from '../component/Styled';
import CloseIcon  from '../assets/CloseIcon.png';
import clickSound from '../assets/click.wav';


const ItemBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
const Item = styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 48px;
    padding: 1rem 2.5rem;
    color: #ffffff;
    background-image: linear-gradient(-180deg, #8d93ff 0%, #646cff 100%);
    box-shadow: #3547ab 0 4px 2px, rgba(0, 0, 0, 0.25) 0 4px 0px;
`;

export default function Skills({title}) {
 const handleClickSound = () => {
        const audio = new Audio(clickSound);
        audio.play();
    };
        const skill = ["Figma",  "Adobe Photoshop", "Adobe Illustrator", "HTML", "CSS", "React", "JavaScript", "SCSS"];
    return (
        <>
            <TitleBox>
                <h2>{title}</h2>
                <ButtonStyled onClick={handleClickSound} ><img src={CloseIcon} alt="닫기"/></ButtonStyled>
            </TitleBox>
            <ItemBox>
            {skill.map(item => (
                <Item>{item} </Item>
            ))}
            </ItemBox>
            
        </>
    )
}
