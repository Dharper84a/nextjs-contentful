import styled from 'styled-components';

export const ComponentBox = styled.div`
    ${({theme}) => theme.layout.content};
    padding-top: 32px;
    padding-bottom: 32px;
    ul {
       margin-left: 16px;
       padding-left: 28px;
    }
`