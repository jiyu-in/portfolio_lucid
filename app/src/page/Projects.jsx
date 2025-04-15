import React, {useState} from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from "framer-motion";
import Tooltip from '../component/Tooltip';

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
const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    display: flex;
    flex-direction: column;
    gap:32px;
    padding: 24px;
    margin: 24px 0;
    border-radius: 24px;
    background-color: #ffd6b2;
    box-shadow:inset 0px 3px 6px rgba(0, 0, 0, 0.25), inset 3px 0px 6px rgba(0, 0, 0, 0.25);
    @media (max-width: 960px) {
        padding: 1rem 0.75rem;
        margin: 1rem 0;
    }
`; 
const FlexBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    @media (max-width: 960px) {
        flex-wrap: wrap; 
        gap:10px;
    }
`; 

const Category = styled.div`
    & span{
        margin:0 4px;
        font-size: 1.125rem;
        font-weight: 500;
        color: #df9547;
        letter-spacing: -0.5px;
    }
`;
const DateText = styled.div``; 
const Description = styled.div`
    font-size:1.5rem;
    word-break:keep-all;
    @media (max-width: 960px) {
        font-size:1rem;
    }
`;
const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    & span{
        font-size:1.25rem;
        font-weight: 200;
    }
    @media (max-width: 960px) {
        & span{
            font-size:0.875rem;
        }
    }
`;

const SkillItem = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    box-shadow: 1px 4px 4px #ffffff36 inset,1px 2px 4px #E6B987, 0px -2px 3px #E6B987;
    border: 6px solid #fff;
    border-radius: 32px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media (max-width: 960px) {
        width: 16px;
        height: 16px;
    }
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

const skillIconMap = {
    "HTML&CSS": "HtmlCssIcon.svg",
    "JavaScript": "JavaScriptIcon.svg",
    "SCSS": "SassIcon.svg",
    "Figma": "FigmaIcon.svg",
    "Adobe Photoshop": "PhotoshopIcon.svg",
    "Adobe illustrator": "IllustratorIcon.svg",
    "React": "ReactIcon.svg",
    "Github": "GitIcon.svg",
    "Sketch":"SketchIcon.svg",
    "Adobe XD":"XdIcon.svg",
};


function Projects({ title, date, skills, des, category, img, url, page, opacity, translateX }) {

    // const handleClick = (url) => {
    //     window.open(url, '_blank');
    // };
    
    return (
    <Root 
        style={{ opacity, translateX }}
        transition={{ type: "object", stiffness: 50, damping: 15 }}
        // onClick={() => handleClick(url)}
    >
        {/* <BgImage src={process.env.PUBLIC_URL + img} alt={title} /> */}
            <BoxStyle className="box">
                <Title>{title}</Title>
                <InnerBoxStyle>
                    <FlexBetween>
                        <Category>
                        {category.map((item, index) => (
                            <span key={index}>#{item}</span>
                        ))}  
                        </Category>
                        <Skills>
                        {skills.map((skill, index) => {
                            const icon = skillIconMap[skill];
                            return (
                                <Tooltip text={skill} key={index}> 
                                    <SkillItem>
                                        {icon && (
                                        <img
                                            src={`/skills/${icon}`}
                                            alt={skill}
                                        />
                                        )}
                                    </SkillItem>
                                </Tooltip>
                            );
                        })}
                        </Skills>
                    </FlexBetween>
                    <Description>{des}</Description>
                </InnerBoxStyle>
                <LinkBox>
                    <Link href={url}> 자세히 보기</Link>
                    {page && <LinkOutline href={page}> 사이트 보기</LinkOutline>}
                </LinkBox>
            </BoxStyle>
        
    </Root>
    );
}

export default Projects;
