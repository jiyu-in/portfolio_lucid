import { useRef } from "react";
import styled from 'styled-components';
import Button from '../component/Button';
import InteractiveImage from '../component/InteractiveImage';
import PaintIcon from '../../public/assets/PaintIcon.png';
import BrowserIcon from '../../public/assets/BrowserIcon.png';
import ImageCropIcon from '../../public/assets/ImageCropIcon.png';
import CodeIcon from '../../public/assets/CodeIcon.png';
import FadeText from '../component/FadeText';
import { useParallax } from "../hooks/useParallax";
import { motion, useScroll } from "framer-motion";

const Slogan = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap:30px;
    & > div{
        width: 80%;
    }
`;

const Txt = styled.p`
    font-size: 5.625rem;
    font-weight: 800;
    text-shadow: 0px 5px 0px #5E3235, -2px 0px #5E3235, 2px 0px #5E3235, 0px -2px #5E3235;
    margin: 0;
    line-height: 1.2;
    @media (max-width: 960px) {
        font-size: 3.375rem;
    }
    @media (max-width: 600px) {
        font-size: 2.25rem;
        text-shadow: 0px 3px 0px #5E3235, -2px 0px #5E3235, 2px 0px #5E3235, 0px -2px #5E3235;
    }
`;

const Txt1 = styled(Txt)`
    color: #E7666A;
`;

const Txt2 = styled(Txt)`
    color: #F88960;
`;

const Desc = styled.p`
    width: 60%;
    color: #482B0E;
    font-size: 1.375rem;
    word-break: break-word;
    margin-bottom: 2rem;
    @media (min-width: 1440px) {
        width: 40%;
    }
    @media (max-width: 960px) {
        font-size: 1rem;
    }
    @media (max-width: 600px) {
        font-size: 0.875rem;
    }
`;

export default function SectionOne() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 80);
    const opacity = useParallax(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

    const images = [
        {
            src: PaintIcon,
            width: '151px',
            height: '153px',
            bottom: '10%',
            left: '34%',
            minBottom: '5%',
            minLeft: '32%',
        },
        {
            src: BrowserIcon,
            width: '400px',
            height: '474px',
            bottom: '-1%',
            right: '10%',
            minBottom: '-0%',
            minRight: '-20%',
        },
        {
            src: ImageCropIcon,
            width: '225px',
            height: '172px',
            top: '10%',
            left: '52%',
            minTop: '15%',
            minLeft: '64%',
        },
        {
            src: CodeIcon,
            width: '101px',
            height: '100px',
            top: '5%',
            left: '5%',
            minTop: '15%',
            minLeft: '10%',
        }
    ];

    return (
        <div>
            {images.map((img, index) => (
                <InteractiveImage key={index} {...img} />
            ))}
            <Slogan>
                <motion.div ref={ref} style={{ y, opacity}}>
                    <Txt1>경험을 코드로 엮어</Txt1>
                    <Txt2>새로운 컨텐츠를</Txt2>
                </motion.div>
                <FadeText $visible={true} style={{ y, opacity}}>
                    <Desc>사용자 경험을 기획하고 디자인하며 퍼블리싱으로 웹 상에서 동적으로 보여지는 화면을 구현하며 새로운 컨텐츠를 만들어내는 일을 좋아합니다.
                    이제는 기술과 디자인을 결합한 창의적인 웹 애플리케이션을 만드는 데 더욱 집중하고 있습니다.</Desc>
                </FadeText>
                <div><Button text="Send Email" href="mailto:jyin2205@naver.com" /></div>
            </Slogan>
        </div>
    );
}
