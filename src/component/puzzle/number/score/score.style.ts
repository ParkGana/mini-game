import styled from 'styled-components'

export namespace ScoreStyle {
    export const Container = styled.div`
        display: grid;
        align-items: center;
        justify-items: center;
    `

    export const Title = styled.div`
        ${({ theme }) => `
            ${theme.font.title3};
            color: ${theme.color.white};
        `}
    `

    export const Score = styled.div`
        ${({ theme }) => `
            ${theme.font.title1};
            color: ${theme.color.white};
        `}
    `
}
