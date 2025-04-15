import React, { useState, useEffect } from "react";
import { TitleBox } from "../component/Styled";
import styled from "styled-components";
import data from "../data/data.json";
import Projects from "./Projects";
import { motion, AnimatePresence } from "framer-motion";
import clickSound from "../assets/click.wav";
import ArrowLeftIcon from '../assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '../assets/ArrowRightIcon.svg';

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideWrapper = styled.div`
  width: 560px;
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
      min-width:360px;
      min-height:400px;
      width: fit-content;
      height: fit-content;
    }
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fbf4df;
  border-radius: 36px;
  padding: 2.5rem 3rem;
  box-shadow: #ab6c35 0 4px 2px, rgba(0, 0, 0, 0.25) 0 4px 0px;
  box-sizing: border-box;
  @media (max-width: 960px) {
    padding: 1rem 1.5rem;
    }
`;

const Controller = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  position: absolute;
  top:50%;
  background: transparent;
  padding:0;
`;

const PrevButton = styled(Button)`
  left:-80px;
`;

const NextButton = styled(Button)`
  right:-80px;
`;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function SectionPortfolio() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selected, setSelected] = useState(null);
  

  useEffect(() => {
    setProjects(data);
  }, []);

    useEffect(() => {
      if (selected) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [selected]);
  

  const handleClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const nextPage = () => {
    if (page < projects.length - 1) {
      setDirection(1);
      setPage((prev) => prev + 1);
      handleClickSound();
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((prev) => prev - 1);
      handleClickSound();
    }
  };

  return (
    <Root>
      <TitleBox>
        <h2>Portfolio</h2>
      </TitleBox>
      <SlideWrapper>
        <AnimatePresence custom={direction} mode="wait">
          <Slide
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {projects[page] && (
              <Projects
                title={projects[page].title}
                date={projects[page].date}
                skills={projects[page].skills}
                des={projects[page].des}
                category={projects[page].category}
                img={projects[page].img}
                url={projects[page].url}
                page={projects[page].page}
              />
            )}
          </Slide>
        </AnimatePresence>
      </SlideWrapper>
      <Controller>
        <PrevButton onClick={prevPage}>
          <img src={ArrowLeftIcon} alt="Previous"/></PrevButton>
        {/* <span>
          {page + 1} / {projects.length}
        </span> */}
        <NextButton onClick={nextPage}>
          <img src={ArrowRightIcon} alt="Next"/></NextButton>
      </Controller>
      {selected && (
              <Drawer project={selected} onClose={() => setSelected(null)} />
      )}
    </Root>
  );
}
