import styled from 'styled-components'

export namespace InfoStyle {
    export const Container = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: 30px auto;
        gap: 5px;
        margin-left: 10px;
    `

    export const Count = styled.div`
        ${({ theme }) => `
            ${theme.font.title1};
            color: ${theme.color.white};
        `}
    `
}
