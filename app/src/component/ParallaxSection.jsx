import {
    motion,
    useScroll,
} from "framer-motion";
import { useParallax } from "../hooks/useParallax";
import { useRef } from "react";
import "./ParallaxSectionStyled.css";
import styled from 'styled-components';

// ✅ 섹션 컴포넌트 import
import BgObject from "./BgObject";
import SectionOne from "../page/SectionOne";
import SectionPortfolio from "../page/SectionPortfolio";
import SectionTwo from "../page/SectionTwo";
import BgPortfolio from "./BgPortfolio";

const Root = styled.div`
    position: relative;
    height: 100vh;
`;

const BgBox = styled.div`
    position: fixed;
    left: 40px;
    top: 40px;
    width: calc(100vw - 80px);
    height: calc(100vh - 80px);
    background-color: #E9D8B8;
    border: 2px solid #5E3235;
    border-radius: 40px;
    z-index: -1;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-size: 20px 20px;
        background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.33) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.33) 1px, transparent 1px);
        mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    }
`;


// ✅ Image → SectionWrapper로 리팩토링 (콘텐츠를 children으로 받음)
function SectionWrapper({ children }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacity = useParallax(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
    
    return (
        <section className="img-container">
            <motion.div ref={ref} style={{opacity}}>
                {children}
            </motion.div>
        </section>
    )
}

export default function ParallaxSection() {

    return (
        <Root>
            <BgBox />
            <SectionWrapper className="sectionOne">
                <BgObject/>
                <SectionOne />
            </SectionWrapper>
            <SectionWrapper className="sectionTwo">
                <BgPortfolio/>
                <SectionPortfolio />
            </SectionWrapper>
            <SectionWrapper className="sectionThree">
                <SectionTwo />
            </SectionWrapper>
        </Root>
    )
}
