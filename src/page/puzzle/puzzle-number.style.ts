import styled from 'styled-components'

export namespace PuzzleNumberStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            gap: 20px;
            padding: 20px;
            background-color: ${theme.color.darkbrown};
        `}
    `

    export const TopContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, fit-content(200px));
        justify-content: space-between;
    `
}
