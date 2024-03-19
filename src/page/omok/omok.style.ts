import styled from 'styled-components'

export namespace OmokStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        padding: 20px;
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            position: relative;
            display: grid;
            gap: 10px;
            padding: 30px;
            background-color: ${theme.color.brown};
        `}
    `

    export const TopContainer = styled.div``
}
