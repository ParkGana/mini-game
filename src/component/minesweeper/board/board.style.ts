import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div<{ row: number; column: number }>`
        ${({ theme, row, column }) => `
            display: grid;
            grid-template-rows: repeat(${row}, 30px);
            grid-template-columns: repeat(${column}, 30px);
            border: 1px solid ${theme.color.gray};
        `}
    `
}
