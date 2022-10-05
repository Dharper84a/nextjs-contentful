import styled, {css} from "styled-components";

const cssImageLeft = css`
    grid-template-columns: 0.4fr 0.6fr;
    figure {
        order: 1;
    }
    aside {
        order: 2;
    }
`
const cssImageRight = css`
    grid-template-columns: 0.6fr 0.4fr;
    figure {
        order: 2;
    }
    aside {
        order: 1;
    }
`

const cssImageLeftBgColor = css`
    background-color: ${({theme}) => theme.colors.background.dark};
`
const cssImageRightBgColor = css`
    background-color: ${({theme}) => theme.colors.background.deepGreen};
`
export const TextWithImageContainer = styled.div`
    ${({theme}) => theme.layout.container};
    display: flex;
    overflow: hidden;
    margin: 0 auto;
    
    ${props => props.imageOnLeft ? cssImageLeftBgColor : cssImageRightBgColor};
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    margin-top: 45px;
    margin-bottom: 45px;
    position: relative;
    z-index: ${({theme}) => theme.layers.content};
    display: grid;
    gap: 90px;
    figure {
        position: relative;
        display: flex;
        width: 100%;
        max-width: 800px;
        height: 400px;
        border-radius: 3px;
        span {
            border-radius: 3px;
        }
    }
    aside {
        width: 100%;
        max-width: 650px;
        height: 400px;
        h2, p {
            color: ${({theme}) => theme.colors.text.light};
        }
        h2 {
            margin: 0 0 16px 0;
        }
    }
    ${props => props.imageOnLeft ? cssImageLeft : cssImageRight};
    
`