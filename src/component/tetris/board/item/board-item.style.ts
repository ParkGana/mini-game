import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ color: string }>`
        ${({ theme, color }) => `
            width: 30px;
            height: 30px;
            background-color: ${color};
            border-right: 1px solid ${theme.color.gray};
            border-bottom: 1px solid ${theme.color.gray};
            color: white;
        `}
    `
}
