import {keyframes,createGlobalStyle} from 'styled-components';
const fxSimpleFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    html,
    body {
        width: 100%;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background: ${({theme}) => theme.colors.background.light};
    }

    body {
        font-family: ${({theme}) => theme.fonts.bodyFont};
        font-size: ${({theme}) => theme.fonts.bodyFontSize};
        font-weight: 400;
        animation: ${fxSimpleFadeIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 0.5rem 0;
        color: ${({theme}) => theme.colors.text.dark};
        font-family: ${({theme}) => theme.fonts.headerFont};
        font-weight: 600;
        line-height: 1.25;
    }
    h1 {
        font-size: ${({theme}) => theme.helpers.fontClamp(42, 56)};
    }
    h2 {
        margin-top: 2rem;
        font-size: ${({theme}) => theme.helpers.fontClamp(34, 42)};
    }
    h3 {
        font-size: ${({theme}) => theme.helpers.fontClamp(24, 30)};
    }
    h4 {
        font-size: ${({theme}) => theme.helpers.fontClamp(22, 24)};
    }
    p {
        margin: 0.25rem 0 1rem 0;
        padding: 0;
        font-family: ${({theme}) => theme.fonts.bodyFont};
        color: ${({theme}) => theme.colors.text.dark};
        font-size: ${({theme}) => theme.helpers.fontClamp(18,20)};
        line-height: 1.75;
    }
    ul, figure {
        margin: 0;
        padding: 0;
    }
    figure {
        display: flex;
        border-radius: 4px;
        * {
            /* border-radius: 0.5rem; */
        }
    }
    a {
        position: relative;
        font-family: ${({theme}) => theme.fonts.bodyFont};
        color: ${({theme}) => theme.colors.text.link};
        text-decoration: none;
        transition: all 0.17s ease-in;
        border-bottom: 1px solid transparent;
        &:hover {
            color: ${({theme}) => theme.colors.blue};
            /* text-decoration: underline; */
            border-color: ${({theme}) => theme.colors.blue};
        }
    }
    button {
        font-family: ${({theme}) => theme.fonts.bodyFont};
        font-size: ${({theme}) => theme.helpers.fontClamp(18,20)};
    }
    
    article {
        max-width: 800px;
    }
`

