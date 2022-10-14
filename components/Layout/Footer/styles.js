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
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: 4rem;
    background: ${({theme}) => theme.colors.background.dark};
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-areas:
        "NAV ADDRESS"
        "COPY COPY";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
    padding-top: 32px;
    padding-bottom: 100px;
    nav {
        grid-area: NAV;
        a {
            display: block;
            margin-bottom: 8px;
        }
    }
    address {
        grid-area: ADDRESS;
        text-align: left;
        color: ${({theme}) => theme.colors.text.light};
        font-size: ${({theme}) => theme.helpers.fontClamp(14, 18)};
        font-style: normal;
        line-height: 1.5;
    }
    div.legal-copy {
        grid-area: COPY;
        text-align: center;
        p {
            color: ${({theme}) => theme.colors.text.light};
            font-size: ${({theme}) => theme.helpers.fontClamp(14, 18)};
            margin: 0 0 4px 0;
            svg {
                padding: 0 4px;
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