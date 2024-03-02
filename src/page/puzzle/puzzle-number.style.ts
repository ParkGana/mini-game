import styled from 'styled-components'

export namespace PuzzleNumberStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        padding: 20px;
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            display: grid;
            gap: 10px;
            padding: 30px;
            background-color: ${theme.color.darkbrown};
        `}
    `

    export const TopContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, fit-content(150px));
        align-items: center;
        justify-content: space-between;
    `
}
