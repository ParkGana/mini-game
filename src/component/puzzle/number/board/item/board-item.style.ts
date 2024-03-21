import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ color: string }>`
        ${({ color }) => `
            width: 70px;
            height: 70px;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: ${color};
            border-radius: 5px;
            overflow: hidden;
        `}
    `

    export const Text = styled.p<{ color: string }>`
        ${({ theme, color }) => `
            ${theme.font.title2};
            color: ${color};
        `}
    `
}
