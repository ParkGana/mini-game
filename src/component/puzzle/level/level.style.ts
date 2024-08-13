import styled from 'styled-components'

export namespace LevelStyle {
    export const Container = styled.div<{ isSelected: boolean }>`
        ${({ theme, isSelected }) => `
            display: grid;
            align-items: center;
            ${isSelected && `background-color: ${theme.color.lightgray}`};
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
        `}
    `

    export const Text = styled.p`
        ${({ theme }) => `
            ${theme.font.title3};
            color: ${theme.color.black};
        `}
    `
}
