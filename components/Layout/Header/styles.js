import styled from 'styled-components'

export const HeaderContainer = styled.header`
    ${({theme}) => theme.layout.container};
    background-color: ${({theme}) => theme.colors.background.light};
`

export const Inner = styled.div`
    ${({theme}) => theme.layout.content};
    display: grid;
    grid-template-columns: 0.75fr 0.25fr;
    gap: 1rem;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    div {
        display: flex;
        align-items: center;
        gap: 2rem;
        figure {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            background-color: ${({theme}) => theme.colors.pastelGreen};
            border-radius: 1rem;
        }
        a {
            color: ${({theme}) => theme.colors.onyx};
            font-size: ${({theme}) => theme.helpers.fontClamp(24, 36)};
            font-weight: 400;
            &::after {
                display: none;
            }
        }
    }
    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`