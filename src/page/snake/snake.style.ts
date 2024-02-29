import styled from 'styled-components'

export namespace SnakeStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        padding: 20px;
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            display: grid;
            gap: 30px;
            padding: 30px;
            background-color: ${theme.color.darkgreen};
        `}
    `

    export const TopContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, fit-content(200px));
        justify-content: space-between;
    `
}
