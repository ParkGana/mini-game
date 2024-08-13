import styled from 'styled-components'

export namespace LevelStyle {
    export const Container = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, fit-content(200px));
        gap: 10px;
    `

    export const SafetyContainer = styled.div<{ selected: boolean }>`
        ${({ theme, selected }) => `
            display: grid;
            align-items: center;
            ${selected && `background-color: ${theme.color.lightgray}`};
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
