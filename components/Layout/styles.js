import styled, {css, keyframes} from 'styled-components'

export const Website = styled.div`
    ${({theme}) => theme.layout.container};
    z-index: ${({theme}) => theme.layers.base};
    max-width: 100vw;
    min-height: 100vh;
    main {
        position: relative;
        z-index: ${({theme}) => theme.layers.content};
        height: fit-content;
    }
`
export const OverlayContainer = styled.div`
    position: absolute;
    z-index: ${({theme}) => theme.layers.overlay};
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`

const fxOverlayClose = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`
export const OverlayBackground = styled.div`
    position: fixed;
    z-index: ${({theme}) => theme.layers.overlay + 1};
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    animation: ${fxOverlayClose} 0.3s reverse forwards;
    ${props => props.transitionState === 'close' && css`
        animation: ${fxOverlayClose} 0.3s forwards;

    `}
`
const fxDrawerOpen = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateX(0%);
    }
`

const fxDrawerClose = keyframes`
    0% {
        transform: translateX(0%);
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
`
const fxClose = keyframes`
0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(2000px);
    opacity: 0;
  }
`
const fxOpen = keyframes`
0% {
    transform: translateY(500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`
const cssDrawer = css`
    position: fixed;
    z-index: ${({theme}) => theme.layers.overlayContent};
    bottom: 0;
    width: 100%;
    height: 75%;
    padding: 1rem 2rem;
    background-color: ${({theme}) => theme.colors.background.green};
    animation: ${fxOpen} 0.85s linear 5s both;
    @media ${({theme}) => theme.devices.iphones} {
        width: 100%;
        padding: 1rem 0.5rem;
    }

`

const cssClose = css`
    animation: ${fxClose} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const OverlayForeground = styled.div`
    position: relative;
    ${props => props.overlayType === 'drawer' && cssDrawer}
    ${props => props.transitionState === 'close' && cssClose}
    &:after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.tomato};
    }
`