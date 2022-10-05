import styled, { css,keyframes } from "styled-components";
import {fxHideMenuButtonBox, fxFlickerIn} from '../../../styles/globalStyles';

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
    ${props => props.transitionState === 'opening' && css`
    animation: ${fxHideMenuButtonBox} 0.1s linear both;
    `}
    ${props => props.transitionState === 'closed' && css`
    animation: ${fxHideMenuButtonBox} 0.3s linear 0.1s reverse both;
    `}
    @media ${({theme}) => theme.device.iphones} {
        ${({ theme }) => theme.layout.content};
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
