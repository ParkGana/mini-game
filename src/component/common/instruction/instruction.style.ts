import styled from 'styled-components'

export namespace InstructionStyle {
    export const Background = styled.div`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        justify-items: center;
        align-items: center;
    `

    export const Container = styled.div`
        ${({ theme }) => `
            background-color: ${theme.color.white};
            opacity: 0.7;
            padding: 10px;
            z-index: 2;
        `}
    `

    export const Text = styled.p`
        ${({ theme }) => `
            ${theme.font.title2};
            color: ${theme.color.red};
        `}
    `
}
