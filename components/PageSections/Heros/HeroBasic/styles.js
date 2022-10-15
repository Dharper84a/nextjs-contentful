import styled, {css, keyframes} from 'styled-components'

const fxGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`
const variations = {
    shifting_greens: css`
        background: linear-gradient(-45deg, #70AC70, #90ba90, #C1E1C1);
        background-size: 400% 400%;
        animation: ${fxGradient} 7s ease infinite;
    `,
    shifting_rainbow: css`
        background: linear-gradient(-45deg, #E50000, #FF8D00, #FFEE00, #028121, #004cff, #770088);
        background-size: 400% 400%;
        animation: ${fxGradient} 14s ease infinite;
        h1 {
            padding: 8px 16px;
            border-radius: 4px;
            background-color: rgba(255,255,255,0.3);
        }
    `
}

export const ComponentBox = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    ${props => variations[props.variation]};
    h1 {
        position: absolute;
        top: 50%;
        left: ${({theme}) => theme.layout.pagePadding.left};
        transform: translateY(-50%);
    }
    @media ${({theme}) => theme.device.tablets} {
        height: 300px;
    }
`
export const HeroBasicContainer = styled.div`
    ${({theme}) => theme.layout.container};
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    position: relative;
    height: 300px;
    h1 {
        position: absolute;
        z-index: ${({theme}) => theme.layers.content + 10};
        top: 60%;
        transform: translateY(-50%);
        margin-bottom: 1.5rem;
        color: ${({theme}) => theme.colors.text.light};
    }
    &::after {
        content: ' ';
        display: block;
        position: absolute;
        z-index: ${({theme}) => theme.layers.content + 5};
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: multiply;
        background: rgb(54,69,79);
        background: linear-gradient(180deg, rgba(54,69,79,0) 0%, rgba(53,57,53,0.5) 100%);
    }

`