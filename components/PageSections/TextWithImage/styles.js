import styled from "styled-components";

export const TextWithImageContainer = styled.div`
    ${({theme}) => theme.layout.container};
    margin: 0 auto;
    padding: 3rem 0;
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    position: relative;
    display: grid;
    grid-template-columns: 0.33fr 0.66fr;
    gap: 0;
    
    figure {
        display: flex;
        width: 100%;
        max-width: 800px;
        aspect-ratio: 2;
        border-radius: 0.25rem;
        * {
            border-radius: 0.25rem;
        }
    }
    aside {
        position: relative;
        z-index: ${({theme}) => theme.layers.content + 10};
        width: 100%;
        max-width: 800px;
        height: fit-content;
        margin: 2rem 0 0 -8rem;
        padding: 1rem;
        background-color: ${({theme}) => theme.colors.background.light};
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        border-radius: 0.25rem;
    }
    @media ${({theme}) => theme.devices.ipads} {
        gap: 1.5rem;
        aside, figure {
            max-width: 100%;
            margin: 0;
        }
    }
    @media ${({theme}) => theme.devices.iphones} {
        grid-template-columns: 1fr;
        aside {
            width: 80%;
            margin-top: -6rem;
            margin-left: 1rem;
        }
    }
`