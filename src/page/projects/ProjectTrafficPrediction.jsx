import React from "react";
import {TitleStyle, DescStyle, UlStyle} from '../../component/Styled';

function ProjectTrafficPrediction() {
    return (
        <div>
         <DescStyle>
              실시간 교통 혼잡을 예측하고 사용자에게 예측된 정보를 제공하는 시스템을 설계하고 퍼블리싱한 프로젝트입니다. 이 서비스는 특히 교통 혼잡을 미리 예측하여 운전자가 보다 효율적인 경로를 선택할 수 있도록 돕습니다. 또한 기술혁신과 신뢰할 수 있는 브랜드로 구축하기 위한 디자인 작업과 대형 스크린을 위한 퍼블리싱 작업을 수행했습니다.
            </DescStyle>
            <TitleStyle>역할과 기여도</TitleStyle>
            <UlStyle>
            <li>디자인 UI/UX 작업</li>
            <li>마크업 작업</li>
            <li>SASS 작성</li>
            <li>목업 프로그램을 사용한 프로토타입</li>
            <li>제작 기여도 100%</li>
            <DescStyle>
              AI 모델을 활용하여 교통 혼잡 정도를 예측하고, 실시간 데이터를 통해 교통 흐름을 모니터링합니다. 혼잡 예측은 사용자가 출발지와 목적지를 입력하면 해당 경로의 예상 혼잡도를 시간대별로 시각화하여 제공하기 때문에 직관적인 디자인 작업이 요구되었습니다.
            </DescStyle>
          </UlStyle>
          </div>
        );
}
export default ProjectTrafficPrediction;