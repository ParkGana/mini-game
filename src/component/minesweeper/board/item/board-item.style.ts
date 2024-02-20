import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 30px;
            height: 30px;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: ${theme.color.white};
            border: 1px solid ${theme.color.gray};
            cursor: pointer;
        `}
    `
}
