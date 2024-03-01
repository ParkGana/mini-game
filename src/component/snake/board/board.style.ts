import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            position: relative;
            display: grid;
            grid-template-rows: repeat(15, 30px);
            grid-template-columns: repeat(15, 30px);
            border-top: 1px solid ${theme.color.lightgray};
            border-left: 1px solid ${theme.color.lightgray};
        `}
    `
}
