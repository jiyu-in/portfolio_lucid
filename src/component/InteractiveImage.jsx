// InteractiveImage.js
import React, { useRef} from 'react';
import styled, { keyframes } from 'styled-components';
import useMouseInteractive from './useMouseInteractive';

const fadeInAndTransform = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  overflow: hidden;
  will-change: transform;
  transition: transform 0.2s ease;
  /* z-index: -1; */
  @media (max-width: 1440px) {
      width: ${({ width }) => width || 'fit-content'};
      height: ${({ height }) => height || 'fit-content'};
    }
  @media (max-width: 960px) {
    top: ${({ minTop }) => minTop || 'auto'};
    left: ${({ minLeft }) => minLeft || 'auto'};
    right: ${({ minRight }) => minRight || 'auto'};
    bottom: ${({ minBottom }) => minBottom || 'auto'};
      z-index: -1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${fadeInAndTransform} ease forwards;
  @media (max-width: 960px) {
    width: 60%;
    height: 60%;
    }
`;

const InteractiveImage = ({ src, alt = 'image', ...styleProps  }) => {
  const ref = useRef(null);
  useMouseInteractive(ref, 20, 0.05); // 반응 강도와 속도 조정 가능

  return (
    <ImageWrapper ref={ref} {...styleProps}>
      <StyledImage src={src} alt={alt} />
    </ImageWrapper>
  );
};

export default InteractiveImage;
