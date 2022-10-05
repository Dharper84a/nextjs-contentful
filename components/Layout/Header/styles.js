import styled, { keyframes } from "styled-components";
const fxFlickerIn = keyframes`
0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SiteIcon = styled.div`
    display: none;
`

export const MenuButtonBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,45%);
    display: flex;
    justify-content: center;
    width: 125px;
    height: 100px;
    padding-top: 0.5rem;
    border-top-left-radius: 70%;
    border-top-right-radius: 70%;
    background-color: ${({ theme }) => theme.colors.pastelGreen};
    button {
        height: fit-content;
        color: ${({theme}) => theme.colors.text.dark};
        font-size: 32px;
        background-color: transparent;
        border: none;
    }
`

export const ComponentBox = styled.header`
    position: fixed;
    z-index: ${({theme}) => theme.layers.overlay};
    bottom: 0;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.pastelGreen};
    /* border-top-right-radius: 30px;
    border-top-left-radius: 30px; */
    @media ${({theme}) => theme.device.iphones} {
        ${({ theme }) => theme.layout.content};
        /* display: flex; */
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: ${({ theme }) => theme.colors.background.light};
        a.site-title {
            width: 100%;
            padding-bottom: 0.5rem;
            color: ${({ theme }) => theme.colors.onyx};
            font-size: ${({ theme }) => theme.helpers.fontClamp(24, 48)};
            font-weight: 400;
            text-align: center;
        }
        img {
            animation: ${fxFlickerIn} 2s linear both;
        }
    }
    
`;
