import styled from 'styled-components'

export namespace PuzzleStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            gap: 20px;
            padding: 20px;
            border: 3px solid ${theme.color.black};
        `}
    `

    export const TopContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, fit-content(300px));
        justify-content: space-between;
    `

    export const LevelContainer = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, fit-content(200px));
        gap: 10px;
    `
}
