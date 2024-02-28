import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            grid-template-rows: repeat(20, 30px);
            grid-template-columns: repeat(10, 30px);
            border-left: 3px solid ${theme.color.gray};
            border-top: 3px solid ${theme.color.gray};
            border-right: 2px solid ${theme.color.gray};
            border-bottom: 2px solid ${theme.color.gray};
        `}
    `
}
