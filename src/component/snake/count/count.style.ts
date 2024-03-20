import styled from 'styled-components'

export namespace CountStyle {
    export const Container = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: 30px auto;
        gap: 5px;
    `

    export const Text = styled.p`
        ${({ theme }) => `
            ${theme.font.title1};
            color: ${theme.color.white};
        `}
    `
}
