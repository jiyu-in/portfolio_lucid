import React from "react";
import styled from "styled-components";

const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;

    &:hover .tooltip {
        opacity: 1;
        transform: translateY(-8px);
        pointer-events: auto;
    }
`;

const TooltipText = styled.div`
    position: absolute;
    bottom: 100%;
    left: -20%;
    transform: translateX(-50%) translateY(0);
    background-image: linear-gradient(-180deg, #fff9e9 0%, #e9dda4 100%);
    box-shadow: 1px -2px 2px #C68751 inset, 0px 1px 1px #E6B987 inset;
    color: #482B0E;
    padding: 6px 10px;
    border-radius: 6px;
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 10;
    /* &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: #dfa562 transparent transparent transparent;
    } */
`;

export default function Tooltip({ children, text }) {
    return (
        <TooltipWrapper>
        {children}
            <TooltipText className="tooltip">{text}</TooltipText>
        </TooltipWrapper>
    );
}
