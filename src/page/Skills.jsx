import React from "react";
import styled from 'styled-components';
import {TitleBox, ButtonStyled} from '../component/Styled';
import CloseIcon  from '../../public/assets/CloseIcon.png';
import LevelStars from "../component/LevelStars";


const ItemBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 960px) {
        height: 60vh;
        overflow-y: auto;
    }
`;
const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.875rem;
    font-weight: 600;
    border-radius: 24px;
    padding: 1rem 2rem;
    color: #482B0E;
    background-image: linear-gradient(180deg, #fff3d9 0%, #fff3be 100%);
    box-shadow: 1px -3px 4px #C68751 inset,0px 1px 0px #E6B987 inset;
    @media (max-width: 960px) {
        font-size: 1.25rem;
        word-break: break-word;
    }
    @media (max-width: 560px) {
        font-size: 1rem;
        padding: 0.75rem 1rem;
    }
`;

export default function Skills({title}) {

        const skill = [
            {
                name: "Figma",
                level:"3",
            },{
                name: "Adobe Photoshop, Illustrator",
                level:"3",
            },{
                name: "HTML&CSS",
                level:"3",
            },{
                name: "JavaScript(React.js)",
                level:"2",
            },{
                name: "GitHub",
                level:"2",
            }];
    return (
        <>
            <TitleBox>
                <h2>{title}</h2>
                {/* <ButtonStyled onClick={handleClickSound} ><img src={CloseIcon} alt="닫기"/></ButtonStyled> */}
            </TitleBox>
            <ItemBox>
            {skill.map(item => (
                <Item>
                    <div>{item.name}</div>
                    <LevelStars level={item.level} />
                    </Item>
            ))}
            </ItemBox>
            
        </>
    )
}
