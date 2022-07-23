import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    html,
    body {
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
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 0.5rem 0;
        font-family: ${({theme}) => theme.fonts.headerFont};
        font-weight: 600;
        line-height: 1.25;
    }
    h1 {
        font-size: ${({theme}) => theme.helpers.fontClamp(42, 56)};
    }
    h2 {
        margin-top: 2rem;
        font-size: ${({theme}) => theme.helpers.fontClamp(30, 36)};
    }
    p {
        margin: 0.25rem 0 1rem 0;
        padding: 0;
        color: ${({theme}) => theme.colors.text.dark};
        font-size: ${({theme}) => theme.helpers.fontClamp(16, 18)};
        line-height: 1.6;
    }
    ul, figure {
        margin: 0;
        padding: 0;
    }
    figure {
        display: flex;
        border-radius: 0.5rem;
        * {
            border-radius: 0.5rem;
        }
    }
    a {
        position: relative;
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

    
    article {
        max-width: 800px;
    }
`

