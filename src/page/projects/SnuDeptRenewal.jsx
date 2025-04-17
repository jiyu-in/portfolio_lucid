import React from 'react';
import {TitleStyle, DescStyle, UlStyle} from '../../component/Styled';


const SnuDeptRenewal = () => {
  return (
    <div>
      <DescStyle>
        이 프로젝트는 서울대학교 특정 학과의 웹 페이지 리뉴얼 작업으로, 학과의 브랜드 이미지와 정보 제공을 최적화하는 데 중점을 두었습니다. 기존 웹 페이지의 디자인은 정보 제공의 명확성이 부족하고, 학과 일정관리, 게시판 관리가 어려워 이를 개선하고 사용자경험을 향상시키는 작업을 하였습니다.
      </DescStyle>
      <TitleStyle>
        역할과 기여도
      </TitleStyle>
      <UlStyle>
        <li>디자인 UI작업</li>
        <li>웹표준과 접근성을 기반한 시멘틱 마크업 작업</li>
        <li>배너 제작</li>
        <li>브랜드 이미지 제작</li>
        <li>php 기반 코딩</li>
        <li>그누보드를 사용한 게시판 제작</li>
      </UlStyle>
      <TitleStyle>
        주요기능
      </TitleStyle>
      <DescStyle>
        학과의 학사 정보, 연구소 활동, 연구 성과, 입학 정보 등을 잘 정리된 정보 구조로 제공하여 사용자가 원하는 정보를 쉽게 찾을 수 있도록 했습니다.
      </DescStyle>
    </div>
  );
};

export default SnuDeptRenewal;