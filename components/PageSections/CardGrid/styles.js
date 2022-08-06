import styled from "styled-components";

export const CardGridContainer = styled.div`
    ${({theme}) => theme.layout.container};
    padding: 4rem 0;
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    p {
        margin-bottom: 2.5rem;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    &.layout {
        &--50 {
            grid-template-columns: 1fr 1fr;
        }
        &--33 {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media ${({theme}) => theme.devices.ipads} {
        &.layout {
            &--50 {
                grid-template-columns: 1fr;
                figure {
                    margin: 0 auto;    
                }
            }
            &--33 {
                grid-template-columns: 1fr 1fr;
            }
        }
    }
`