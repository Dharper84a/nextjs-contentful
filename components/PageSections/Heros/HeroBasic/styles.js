import styled from 'styled-components'

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