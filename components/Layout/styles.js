import styled from 'styled-components'

export const Website = styled.div`
    ${({theme}) => theme.layout.container};
    position: relative;
    z-index: ${({theme}) => theme.layers.base};
    min-height: 100vh;
    main {
        padding-bottom: 8rem;
    }
`