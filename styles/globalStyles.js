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

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 0.5rem 0;
        line-height: 1.25;
    }
    h1 {
        font-size: ${({theme}) => theme.helpers.fontClamp(16, 56)};
    }
    p {
        margin: 0.25rem 0 0.5rem 0;
        padding: 0;
        font-size: ${({theme}) => theme.helpers.fontClamp(16, 18)};
        line-height: 1.35;
    }
    ul, figure {
        margin: 0;
        padding: 0;
    }

    a {
        position: relative;
        color: ${({theme}) => theme.colors.text.link};
        text-decoration: none;
        transition: all 0.17s ease-in;
        &::after {
            content: ' ';
            display: block;
            position: absolute;
            width: 0%;
            height: 1px;
            margin-top: 0%;
            background-color: ${({theme}) => theme.colors.blue};
        }
        &:hover {
            color: ${({theme}) => theme.colors.blue};
            &::after {
                width: 100%;
                transition: all 0.17s ease-in;
            }
        }
    }
`

