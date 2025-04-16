import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const FadeTextWrapper = styled.div`
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transform: translateY(${(props) => (props.visible ? '0' : '-20px')});
    transition: opacity 0.8s ease, transform 0.8s ease;
    `;

    const FadeText = ({ children }) => {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setVisible(entry.isIntersecting);
        },
        {
            threshold: 0.3, // 보이는 비율 설정
        }
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
        };
    }, []);

    return <FadeTextWrapper ref={ref} visible={visible}>{children}</FadeTextWrapper>;
};

export default FadeText;
