import React from "react";
import styled from 'styled-components';
import {TitleBox, ButtonStyled} from '../component/Styled';
import CloseIcon  from '../assets/CloseIcon.png';
import clickSound from '../assets/click.wav';
import AvatarImage  from '../assets/AvatarImage.png';
import NotionIcon  from '../assets/NotionIcon.png';
import MailIcon  from '../assets/MailIcon.png';

const Section = styled.div`
    display: flex;
    gap:60px;
    padding:20px;
    & p{
        font-size: 1.75rem;
        font-weight: 500;
    }
    @media (max-width: 960px) {
        flex-direction: column;
        gap:20px;
        padding: 0;
        & p{
            font-size: 1.125rem;
            height: 3rem;
            overflow-y: auto;
        }
    }
    @media (max-width: 560px) {
        & p{
            font-size: 1rem;
        }
    }
`;
const ImageBox = styled.div`
    display: flex;
    padding: 30px;
    border-radius: 36px;
    overflow: hidden;
    min-width: 120px;
    height: 120px;
    background-color: #f0bc5c;
    box-shadow: 1px -6px 6px #C68751 inset, 0px 4px 4px #E6B987 inset, 1px 4px 9px #E6B987, 0px -3px 5px #E6B987;
    border: 12px solid #fff;
    & img{
        width: 100%;
        height: 200px;
        object-fit: contain;
        margin-top: -20px;
        margin-left: 10px;
    }
    @media (max-width: 960px) {
        flex-direction: column;
        min-width: 120px;
        height: 120px;
        & img{
            height: 240px;
        }
    }
`;
const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    gap:32px;
    & a{
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(-180deg, #8d93ff 0%, #646cff 100%);
        box-shadow: 1px -3px 3px #0000006e inset, 1px 4px 4px #ffffff36 inset, 1px 4px 9px #0000005c;
        border: 1px solid #abb2fb;
        border-radius: 40px;
        padding:14px;
        box-sizing: border-box;
        & img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        &:active{
            box-shadow: 1px -3px 3px #d5d5d56d inset, 1px 4px 4px #ffffff36 inset;
            & img{
                opacity: 0.7;
            }
        }
        &:hover, &:focus{
            & img{
                opacity: 0.8;
            }
        }
    }
    @media (max-width: 960px) {
        & a{
        width: 48px;
        height: 48px;
        }
    }
`;

export default function Profile({title}) {
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
            <Section>
                <div>
                <ImageBox>
                    <img src={AvatarImage} alt="아바타"/>
                </ImageBox>
                <LinkBox>
                    <a href="https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df" target="_blank"><img src={NotionIcon} alt="mailto"/></a>
                    <a href="mailto:jyin2205@naver.com" target="_blank"><img src={MailIcon} alt="github"/></a>
                </LinkBox>
                </div>
                <p>
                    안녕하세요? UI/UX 디자이너이자 퍼블리셔 지유입니다.<br/>
                사용자를 이해하고, 팀과 함께 만들어가는 것을 좋아합니다.
                디자인의 목적을 명확히 파악하여 디자인을 하고 빠르게 실행하고 추진력 있게 작업하는 스타일입니다.<br/>
                앞으로 더 다양한 분야의 기업과 협업하며 저만의 경험을 넓혀가고 싶습니다.
                </p>
            </Section>
        </>
    )
}
