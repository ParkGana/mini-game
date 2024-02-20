import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ isOpen: boolean }>`
        ${({ theme, isOpen }) => `
            width: 30px;
            height: 30px;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: ${isOpen ? theme.color.lightgray : theme.color.white};
            border: 1px solid ${theme.color.gray};
            cursor: pointer;
        `}
    `
}
