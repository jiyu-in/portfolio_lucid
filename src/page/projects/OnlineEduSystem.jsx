import React from 'react';
import {TitleStyle, DescStyle, UlStyle} from '../../component/Styled';

function OnlineEduSystem() {
  return (
    <div>
      <DescStyle>
        학생과 교사 모두 시간과 장소에 구애받지 않고 학습관리와 수업자료를 제공받고 제공할 수 있도록 돕는 시스템을 구축하였습니다. 프로젝트는 학생, 교사, 관리자 등 다양한 사용자 역할을 지원하고 있으며, 교육 효과성을 높이기 위한 UI/UX 분석 및 AI 기반 학습 솔루션 개발을 하였습니다.
      </DescStyle>

      <TitleStyle>역할과 기여도</TitleStyle>
      <UlStyle>
        <li>React 프레임워크</li>
        <li>Webpack을 통한 기능 구현</li>
        <li>Github를 사용한 프로젝트 관리</li>
        <li>chart.js 차트 구현</li>
        <li>Lottie 애니메이션 효과 구현</li>
        <li>Figma 활용한 디자인 작업</li>
      </UlStyle>

      <TitleStyle>주요기능</TitleStyle>
      <DescStyle>
        개인 대시보드를 통해 자신의 학습 상태, 과제 제출 현황, 성적 등을 한눈에 확인할 수 있는 화면 설계와 데이터를 시각적으로 분석할 수 있도록 <strong>차트</strong>와 <strong>그래프</strong>를 제공합니다.
      </DescStyle>
    </div>
  );
}

export default OnlineEduSystem;
