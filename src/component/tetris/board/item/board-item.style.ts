import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ isBlock: boolean; color: string }>`
        ${({ theme, isBlock, color }) => `
            width: 30px;
            height: 30px;
            background-color: ${isBlock ? color : theme.color.black};
            border-right: 1px solid ${theme.color.gray};
            border-bottom: 1px solid ${theme.color.gray};
            color: white;
        `}
    `
}
