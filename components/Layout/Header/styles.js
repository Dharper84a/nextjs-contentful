import styled, { css,keyframes } from "styled-components";
import {fxHideMenuButtonBox, fxShowMenuButtonBox, fxFlickerIn} from '../../../styles/globalStyles';

export const SiteIdentity = styled.div`
    display: none;
    @media ${({theme}) => theme.device.tablets} {
        display: grid;
        grid-template-columns: 48px 1fr;
        align-items: center;
        gap: 32px;
        a {
            color: ${({theme}) => theme.colors.text.dark};
            font-size: ${({theme}) => theme.helpers.fontClamp(28, 42)};
        }
    }
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
    @media ${({theme}) => theme.device.tablets} {
       position: initial;
       top: initial;
       align-items: center;
       width: 64px;
       height: 64px;
       padding-top: 0;
       border-radius: 4px;
       background-color: ${({ theme }) => theme.colors.blueSteel};
       button {
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.colors.text.light};
        }
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
        ${({theme}) => theme.layout.content};
        top: 0;
        display: grid;
        grid-template-columns: auto;
        grid-template-areas: "I I I B";
        justify-content: space-between;
        align-items: center;
        height: 80px;
        box-shadow: 0px 10px 28px rgba(10,12,14,.21);
        ${SiteIdentity} {
            grid-area: I;
        }
        ${MenuButtonBox} {
            grid-area: B;
        }
    }
    
`;
