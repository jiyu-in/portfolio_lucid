import React from 'react';
import {TitleStyle, DescStyle, UlStyle} from '../../component/Styled';

function Dabang() {
    return (
        <div>
            <DescStyle>다방 대시보드는 기존 부동산 중개 서비스에서 확장된 자산관리 플랫폼으로, 기존 부동산 거래 수수료 외에도 대출중개, 보험, 투자 상품판매 등 새로운 수익원을 창출할 수있도록 고객이 부동산을 구매할 때 금융 서비스(주택담보대출, 전세대출, 신용대출 등)가 필요하므로, 원스톱 서비스를 제공합니다. 
                금융상품을 함께 제공하면 고객이 플랫폼에 머무는 시간이 늘어나고 재방문 충성도를 높일수있습니다.
                사용자가 부동산을 포함한 개인 자산을 효율적으로 관리할 수 있도록 설계, 금융 데이터를 직관적으로 제공하여 사용자들이 자신의 재무 상태를 쉽게 파악하고, 더 나은 재정적 결정을 내릴 수 있도록 설계했습니다.</DescStyle>

                <TitleStyle>대상 사용자 및 주요 목표</TitleStyle>

                <UlStyle>
                    <li>대상 사용자: 다방을 이용하는 일반 고객</li>
                    <li>주요 목표
                        <ul className="ulDepth">
                            <li>사용자가 자신의 자산을 한눈에 확인할 수 있도록 정보 제공</li>
                            <li> 대출, 투자, 지출 내역 등을 직관적으로 분석할 수 있는 대시보드 구성</li>
                            <li> 부동산 거래뿐만 아니라 자산관리 서비스까지 확장하는 연결성 제공</li>
                        </ul>
                    </li>
                </UlStyle>
                <TitleStyle>UX 설계 방향</TitleStyle>
                <UlStyle>
                    <li>
                        데이터 시각화 중심
                        <ul className="ulDepth">
                            <li> 사용자의 금융 데이터를 이해하기 쉽도록 그래프 및 비주얼 요소 활용</li>
                            <li>자산 분석, 지출 분석 등 차트 기반의 UI 구성으로 가독성 강화</li>
                            <li> 숫자 기반의 정보(예: KOSPI 지수, 순자산)를 강조하여 정보 전달력 극대화</li>
                        </ul>
                    </li>
                    <li>
                        사용자 친화적인 인터페이스
                        <ul className="ulDepth">
                            <li>핵심 정보(자산, 대출, 투자) 우선 배치로 빠른 정보 확인 가능</li>
                            <li>최근 거래 내역, 대출 현황 등을 그룹화하여 사용자의 목표 중심 설계</li>
                            <li>복잡한 금융 용어 없이 직관적인 아이콘과 색상으로 인사이트 제공</li>
                        </ul>
                    </li>
                    </UlStyle>

                <TitleStyle>부동산자산 연결 부동산 서치화면_2025 추가화면 작업중</TitleStyle>
                <img src='https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F3a4ad521-a6e3-4995-a040-e7cf405d8698%2F%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%AF_%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_2025_%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8.jpg/size/w=1420?exp=1744879467&sig=s9118VHr_6hIXcW3uqEeLmkndQ63atOe5-5n52HhUPA&id=1c07cdfc-3fd0-80dd-b876-c6e253d9cea7&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf' alt="부동산자산 연결 부동산 서치화면_2025 추가화면 작업.jpg"/>
                <TitleStyle>UI 디자인 접근법 </TitleStyle>
                <UlStyle>
                <li> 
                    다방 브랜드 컬러 유지
                        <ul className="ulDepth">
                            <li>기존 다방의 브랜드 컬러(블루 계열)를 활용하여 일관성 유지</li>
                            <li>신뢰감을 주는 금융 서비스 특성을 반영한 디자인 구성</li>
                        </ul>
                    </li>
                    <li>
                        모던하고 깔끔한 레이아웃
                        <ul className="ulDepth">
                            <li>사이드바를 활용한 명확한 내비게이션 구조</li>
                            <li>각 섹션을 카드 형태로 구분하여 가독성과 정보 접근성 향상</li>
                            <li>중요 데이터는 컬러 및 폰트 크기로 강조하여 정보 전달력 증대</li>
                        </ul>
                    </li>
                    </UlStyle>

                <TitleStyle>서비스 화면 _ 퍼블리싱완성화면</TitleStyle>
                <img src='https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F49f12098-ce94-4ae0-94d5-a964f7b3fe3b%2F%E1%84%83%E1%85%A1%E1%84%87%E1%85%A1%E1%86%BC_Web_index.jpg/size/w=1080?exp=1744881992&sig=OKHlC0NIQ45dPX9BpQiysMqc-Z1ABUUde_zm5qGGcfY&id=1bf7cdfc-3fd0-803d-b1ed-e375f1680ad0&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf' alt="부동산자산 연결 부동산 서치화면_2025 추가화면 작업.jpg"/>
                {/* <img src='https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F3777ac50-b87b-4b6e-a66a-280068a6f02b%2FMobile.jpg/size/w=250?exp=1744882024&sig=cGwQ16q5nDDvGCEaM-Hmd8Ox0VRSWVUGcM-J_wad294&id=1bf7cdfc-3fd0-8045-a089-fb7e86eec7e5&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf' alt="부동산자산 연결 부동산 서치화면_2025 추가화면 작업.jpg"/> */}
                <TitleStyle>차별점 및 기대 효과</TitleStyle>
                <UlStyle>
                    <li>기존 부동산 서비스에서 금융·자산관리로의 확장을 반영한 대시보드 </li>
                    <li>데이터 시각화 중심 UI/UX로 복잡한 금융 정보의 직관적 이해 가능</li>
                    <li>브랜드 정체성을 유지하면서도, 확장 가능한 금융 서비스 경험 제공</li>
                </UlStyle>
        </div>
    );
}

export default Dabang;