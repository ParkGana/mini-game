import styled from 'styled-components'

export namespace ScoreStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            ${theme.font.body1};
            color: ${theme.color.white};
            text-align: center;
        `}
    `
}
