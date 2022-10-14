import styled, { css,keyframes } from "styled-components";
import {fxHideMenuButtonBox, fxShowMenuButtonBox, fxFlickerIn} from '../../../styles/globalStyles';

export const SiteIcon = styled.div`
    display: none;
`

export const MenuButtonBox = styled.div`
    position: absolute;
    top: -50px;
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
    display: flex;
    justify-content: center;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.pastelGreen};
    ${props => props.transitionState === 'open' && css`
    animation: ${fxHideMenuButtonBox} 0.1s linear both;
    `}
    ${props => props.transitionState === 'closing' && css`
    animation: ${fxShowMenuButtonBox} 0.1s linear 0.2s both;
    `}
    @media ${({theme}) => theme.device.tablets} {
        height: 80px;
    }
    
`;
