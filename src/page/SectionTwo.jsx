import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from 'styled-components';
import SkillsIcon from '../../public/assets/SkillsIcon.png';
import PhotoIcon from '../../public/assets/PhotoIcon.png';
import SmileIcon from '../../public/assets/SmileIcon.png';
import clickSound from '../../public/assets/click.wav';
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Profile from "./Profile";
import BgObject from '../component/BgObject';

const Root = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1440px;
    min-width: 640px;
    padding: 120px;
    gap:80px;
    box-sizing: border-box;
    @media (min-width: 2400px) {
        max-width: 1800px;
    }
    @media (max-width: 960px) {
        max-height: 100vh;
        padding: 40px 80px;
        gap:32px;
    }
    @media (max-width: 640px) {
        flex-direction: column;
        min-width: 340px;
        padding: 20px;
    }
`;
const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap:80px;
    @media (max-width: 960px) {
        gap:40px;
    }
    @media (max-width: 640px) {
        flex-direction: row;
    }
`;
const MenuStyled = styled.div`
    position: relative;
    width: 192px;
    height: 192px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-image: linear-gradient(-180deg, #fff9e9 0%, #e9dda4 100%);
    box-shadow: 1px -6px 6px #C68751 inset, 0px 4px 4px #E6B987 inset;
    cursor: pointer;
    & img{
        margin-bottom: 30px;
        z-index: 1;
    }
    &:hover, &.active{
        & img{
            transform: translateY(-12px);
            transition: transform 0.5s ease-out; 
        }
    }
    &:active, &.active{
        & .nameTag{
            background: #e16064;
            color: #fff;
            border: 0 none;
            box-shadow: inset 0px 6px 5px rgba(0, 0, 0, 0.25);
        }
    }
    @media (max-width: 960px) {
        width: 84px;
        height: 84px;
        & img{
            width: 80%;
            height: 80%;
        }
    }
    @media (max-width: 640px) {
        width: 56px;
        height: 56px;
    }
`;
const InnerBox = styled.div`
    width: 140px;
    height: 140px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(45deg, #B2EDDC 0%, #63E2BC 100%);
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    @media (max-width: 960px) {
        width: 64px;
        height: 64px;
    }
`;
const InnerBox1 = styled(InnerBox)`
    background-image: linear-gradient(-45deg, #f0bc5b 0%, #ffd27e 100%);
  
`;
const InnerBox2 = styled(InnerBox)`
    background-image: linear-gradient(45deg, #D1B8F9 0%, #8558CF 100%);
`;
const NameTag = styled.div`
    position: absolute;
    left: 50%;
    bottom:-16px;
    transform: translate(-50%, 0);
    padding:0.563rem 1rem;
    font-size:2.25rem;
    font-weight: 800;
    color:#e16064;
    background-image: linear-gradient(180deg, #fff3d9 0%, #fff3be 100%);
    border:1px solid #D09B67;
    border-radius: 50px;
    box-shadow: #ab6c35 0 4px 2px, rgba(0, 0, 0, 0.25) 0 4px 0px;
    z-index: 1;
    @media (max-width: 960px) {
        font-size:1.25rem;
        padding:0.5rem 1rem;
    }
    @media (max-width: 640px) {
        font-size:1rem;
        padding:0.3rem 0.75rem;
        border-radius: 24px;
    }
`;

const Contents = styled(motion.div)`
    position: relative;
    min-width: min-content;
    min-height: -webkit-fill-available;
    background-color: #fbf4df;
    border-radius: 36px;
    padding:2.5rem 3rem;
    margin: 0 auto;
    box-shadow: #ab6c35 0 4px 2px, rgba(0, 0, 0, 0.25) 0 4px 0px;
    overflow: hidden;
    & p{
        word-break: keep-all;
        color: #482B0E;
        margin: 0;
    }
    &::before{
        content: "";
        position: absolute;
        left: 16px;
        top: 16px;
        width: calc(100% - 34px);
        height: calc(100% - 34px);
        border:2px dashed #ccc2b8;
        border-radius: 30px;
    }
    @media (max-width: 1240px) {
        & p{
            font-size:1.5rem;
            max-height: 50vh;
            overflow-y: auto;
        }
    }
    @media (max-width: 640px) {
        width: 80%;
        min-height: fit-content;
        padding:0.75rem 1.5rem;
        border-radius: 24px;
        &::before{
            left: 10px;
            top: 10px;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            border-radius: 20px;
        }
    }
`;

export default function SectionTwo() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 70%", "start 30%"], 
        }); 
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 25, 1]);

    const handleClickSound = () => {
        const audio = new Audio(clickSound);
        audio.play();
    };
    const [activeTab, setActiveTab] = useState("profile");
    const tabList = [
        // { key: "portfolio", label: "Portfolio", img: PhotoIcon, inner:<InnerBox/> },
        { key: "profile", label: "Profile", img: SmileIcon, inner:<InnerBox2/>  },
        { key: "skills", label: "Skills", img: SkillsIcon , inner:<InnerBox1/> },
    ];

    const currentTab = tabList.find(tab => tab.key === activeTab);

    const renderContent = () => {
        switch (activeTab) {
            case "portfolio":
                return <Portfolio title={currentTab?.label} />;
            case "profile":
                return <Profile title={currentTab?.label} />;
            case "skills":
                return <Skills title={currentTab?.label} />;
            default:
                return null;
        }
    };

    return (
        <Root>
            <BgObject/>
            <Nav>
                {tabList.map(tab => (
                    <MenuStyled 
                        key={tab.key}
                        className={activeTab === tab.key ? "active" : ""}
                        onClick={() => {
                            setActiveTab(tab.key);
                            handleClickSound();
                        }}
                        >
                        <img src={tab.img} alt={tab.label}/>
                        {tab.inner}
                        <NameTag className="nameTag">{tab.label}</NameTag>
                    </MenuStyled>
                ))}
            </Nav>
            <Contents ref={ref}>
                <motion.div
                    style={{ opacity, y }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }} >
                {renderContent()}
                </motion.div>
            </Contents>
        </Root>
    )
}
