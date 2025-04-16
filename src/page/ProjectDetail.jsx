import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import CloseIcon  from '../assets/CloseIcon.png';
import {ButtonStyled} from '../component/Styled';
import clickSound from '../assets/click.wav';
import Dabang from '../page/projects/Dabang';
import OnlineEduSystem from '../page/projects/OnlineEduSystem';
import ProjectVoiceEntertainment from '../page/projects/ProjectVoiceEntertainment';
import ProjectTrafficPrediction from '../page/projects/ProjectTrafficPrediction';
import ProjectCryptoExchange from '../page/projects/ProjectCryptoExchange';
import ProjectKoreaBroadcastArts from '../page/projects/ProjectKoreaBroadcastArts';
import SnuDeptRenewal from '../page/projects/SnuDeptRenewal';

const Root = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    color:#482B0E;
    touch-action: manipulation;
    &:hover, &:focus, &:active{
        transition: all 1s ease;
        border-radius:  0 40px;
        &>img{
            border-radius: 0 40px ;
            transition: all 0.5s ease;
        }
        & .box{
            opacity: 1;
            visibility: visible;
            transition: all 1s ease;
        }
    }
`;


const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 960px) {
        font-size: 1.75rem;
    }
`;

const Title = styled.div`
    font-size:2.5rem;
    font-weight: bold;
    margin:0.5rem 0 0.6rem;
    /* word-break: keep-all; */
    color:#E7666A;
    line-height: 1.2;
    text-shadow: 1px 1px 3px #aa8d8f;
    @media (max-width: 960px) {
        font-size: 1.75rem;
    }
`;
const BoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height:100%;
`;

const InnerBoxStyle = styled.div`
    height:100%;
    max-height: 80%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    margin: 24px 0;
    border-radius: 24px;
    background-color: #ffd6b2;
    box-shadow:inset 0px 3px 6px rgba(0, 0, 0, 0.25), inset 3px 0px 6px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    & img {
        width: 100%;
        /* height: 100%; */
        object-fit: contain;
    }
    & > div{
        overflow-y:auto;
    }
    @media (max-width: 960px) {
        padding: 1rem 0.75rem;
        margin: 1rem 0;
    }
`; 
const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`; 


const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    gap:16px;
`;

const Link = styled.a`
    width: fit-content;
    color:#fff;
    font-size: 1.25rem;
    font-weight: 800;
    text-decoration: inherit;
    padding: 0.4em 1em;
    background-image: linear-gradient(-180deg, #8d93ff 0%, #646cff 100%);
    box-shadow: 1px -3px 3px #0000006e inset, 1px 4px 4px #ffffff36 inset, 1px 4px 9px #0000005c;
    border: 1px solid #abb2fb;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.1s ease;
    &:hover{
        color:#ffffffa1;
    }
    &:active{
        box-shadow:inset 0px 6px 5px rgba(0, 0, 0, 0.25);
        border: 0 none;
    }
    @media (max-width: 960px) {
        font-size: 1rem;
    }
`;

const LinkOutline = styled(Link)`
    color:#646cff;
    background: linear-gradient(180deg, #fff3d9 0%, #fff3be 100%);
    box-shadow: rgba(0, 0, 0, 0.25) 2px 0 2px,rgba(34, 34, 34, 0.238) 0% 0 2px 2px,1px -3px 3px #0000006e inset,1px 2px 2px #ffffff36 inset;
    &:hover{
        color:#646cffa1;
    }
`;
const CloseBtn = styled(ButtonStyled)`
    cursor: pointer;
`;

const componentMap = {
    Dabang,
    OnlineEduSystem,
    ProjectVoiceEntertainment,
    ProjectTrafficPrediction,
    ProjectCryptoExchange,
    ProjectKoreaBroadcastArts,
    SnuDeptRenewal,
  };

function ProjectDetail({ title, componentName, page, opacity, translateX, onClick, onClose }) {

    const Component = componentMap[componentName];

  const handleClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

    return (
    <Root 
        style={{ opacity, translateX }}
        transition={{ type: "object", stiffness: 50, damping: 15 }}
        onClick={onClick}
    >
        {/* <BgImage src={process.env.PUBLIC_URL + img} alt={title} /> */}
            <BoxStyle className="box">
                <DrawerHeader>
                    <Title>{title}</Title>
                    {/* <CloseBtn onClick={() => {
                        handleClickSound();
                        onClose();
                    }}><img src={CloseIcon} alt="닫기"/></CloseBtn> */}
                </DrawerHeader>
                <InnerBoxStyle>
                    {Component ? <Component /> : <p>설명 컴포넌트 없음</p>}
                </InnerBoxStyle>
                <LinkBox>
                {page && <Link href={page} target="_blank"> 사이트 보기</Link>}
                    <LinkOutline onClick={() => {
                        handleClickSound();
                        onClose();}} > 닫기</LinkOutline>
                    {/* {page && <LinkOutline href={page} target="_blank"> 사이트 보기</LinkOutline>} */}
                </LinkBox>
            </BoxStyle>
        
    </Root>
    );
}

export default ProjectDetail;
