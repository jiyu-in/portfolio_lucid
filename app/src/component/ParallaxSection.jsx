import {
    motion,
    useScroll,
} from "framer-motion";
import { useParallax } from "../hooks/useParallax";
import { useRef } from "react";
import "./ParallaxSectionStyled.css"

// ✅ 섹션 컴포넌트 import
import SectionOne from "../page/SectionOne";
import SectionPortfolio from "../page/SectionPortfolio";
import SectionTwo from "../page/SectionTwo";
import BgPortfolio from "./BgPortfolio";



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
        <>
            <SectionWrapper className="sectionOne">
                <SectionOne />
            </SectionWrapper>
            <SectionWrapper className="sectionTwo">
                <BgPortfolio/>
                <SectionPortfolio />
            </SectionWrapper>
            <SectionWrapper className="sectionThree">
                <SectionTwo />
            </SectionWrapper>
        </>
    )
}
