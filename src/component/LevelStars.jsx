import React from 'react';
import PropTypes from 'prop-types';
import StarFillIcon  from '../../public/assets/StarFillIcon.png';
import StarLineIcon  from '../../public/assets/StarLineIcon.png';
import styled from 'styled-components';

const StarStyled = styled.span`
    @media (max-width: 960px) {
        display: inline-flex;
        width: 20px;
        height: 20px;
        & img{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
    }
`;
/**
 * LevelStars
 * @param {number} level — 현재 레벨 (1~max)
 * @param {number} max — 최대 레벨(별) 개수 (기본 3)
 */

const LevelStars = React.memo(function LevelStars({ level, max = 3 }) {
  
  const stars = Array.from({ length: max }, (_, i) => (
    <StarStyled
      key={i}
      aria-hidden="true"
      style={{ 
        marginRight: '0.1em' 
      }}
    >
      {i < level ? <img src={StarFillIcon} alt="★"/> : <img src={StarLineIcon} alt="☆"/> }
    </StarStyled>
  ));

  return (
    <div aria-label={`Level: ${level} out of ${max}`} role="img" style={{lineHeight:1}}>
      {stars}
    </div>
  );
});

LevelStars.propTypes = {
  level: PropTypes.number.isRequired,
  max: PropTypes.number,
};

export default LevelStars;
