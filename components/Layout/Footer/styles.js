import styled, {keyframes} from 'styled-components'

const fxHeartPulse = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
`

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${({theme}) => theme.colors.background.dark};
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    nav {
        display: flex;
        gap: 1rem;
    }
    div {
        display: flex;
        justify-content: flex-end;
        column-gap: 0.5rem;
        p {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${({theme}) => theme.colors.text.light};
            font-size: ${({theme}) => theme.helpers.fontClamp(12,14)};
            svg {
                width: 16px;
                color: ${({theme}) => theme.colors.rubyRed};
                animation: ${fxHeartPulse} 2s infinite;
            }
        }
    }
    @media ${({theme}) => theme.devices.smallMacs} {
        grid-template-columns: 1fr;
        row-gap: 1rem;
    }
    @media ${({theme}) => theme.devices.ipads} {
        justify-content: center;
        nav,div,p {
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
        }
    }
`