import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from 'styled-components';
import SkillsIcon from '../assets/SkillsIcon.png';
import PhotoIcon from '../assets/PhotoIcon.png';
import SmileIcon from '../assets/SmileIcon.png';
import clickSound from '../assets/click.wav';
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Profile from "./Profile";


const Root = styled.div`
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
`;
const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:80px;
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
`;
const InnerBox = styled.div`
    width: 140px;
    height: 140px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(-45deg, #f0bc5b 0%, #ffd27e 100%);
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
`;
const InnerBox1 = styled(InnerBox)`
    background-image: linear-gradient(45deg, #B2EDDC 0%, #63E2BC 100%);
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
`;

const Contents = styled(motion.div)`
    position: relative;
    width: fit-content;
    background-color: #fbf4df;
    border-radius: 36px;
    padding:2.5rem 3rem;
    box-shadow: #ab6c35 0 4px 2px, rgba(0, 0, 0, 0.25) 0 4px 0px;
    & p{
        word-break: keep-all;
        font-size: 2.5rem;
        font-weight: 600;
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
    const [activeTab, setActiveTab] = useState("portfolio");
    const tabList = [
        { key: "portfolio", label: "Portfolio", img: PhotoIcon, inner:<InnerBox/> },
        { key: "skills", label: "Skills", img: SkillsIcon , inner:<InnerBox1/> },
        { key: "profile", label: "Profile", img: SmileIcon, inner:<InnerBox2/>  }
    ];

    const currentTab = tabList.find(tab => tab.key === activeTab);

    const renderContent = () => {
        switch (activeTab) {
            case "portfolio":
                return <Portfolio title={currentTab?.label} />;
            case "skills":
                return <Skills title={currentTab?.label} />;
            case "profile":
                return <Profile title={currentTab?.label} />;
            default:
                return null;
        }
    };

    return (
        <Root>
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
