import styled from "styled-components";

export const CardGridContainer = styled.div`
    ${({theme}) => theme.layout.container};
    padding: 4rem 0;
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
`