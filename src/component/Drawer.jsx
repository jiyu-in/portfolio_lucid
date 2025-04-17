import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetail from '../page/ProjectDetail';
import {ButtonStyled} from '../component/Styled';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(4px);
  z-index: 99;
`;

const DrawerWrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  width: 50%;
  max-width: 960px;
  height: -webkit-fill-available;
  min-height: fit-content;
  background: #fbf4df;
  border-radius: 24px;
  overflow-y: auto;
  z-index: 100;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0 10px 30px;
  z-index: 999;
`;

const CloseBtn = styled(ButtonStyled)`
  position: absolute;
  top: 42px;
  right: 36px;
  cursor: pointer;
  z-index: 999;
`;




export default function Drawer({ project, onClose }) {
    const wrapperRef = useRef(null);
    const [style, setStyle] = useState({});

    useEffect(() => {
      const updatePosition = () => {
        if (wrapperRef.current) {
          const width = wrapperRef.current.offsetWidth;
          setStyle({
            left: `calc(50% - ${width / 2}px)`,
            width: "50%",
            maxWidth: "960px",
          });
        }
      };
  
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }, []);
  
    return (
      <AnimatePresence>
        {project && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <DrawerWrapper
              ref={wrapperRef}
              style={{ ...style }}
              initial={{ scale: 0.8, opacity: 0, y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetail {...project}  onClick={onClose} />
            </DrawerWrapper>
          </>
        )}
      </AnimatePresence>
    );
  }
  