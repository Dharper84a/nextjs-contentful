import styled from 'styled-components';

export const FeaturedPersonContainer = styled.div`
    ${({theme}) => theme.layout.container};
    padding: 4rem 0;
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
`