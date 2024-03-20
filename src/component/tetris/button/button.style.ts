import styled from 'styled-components'

export namespace ButtonStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            background-color: ${theme.color.black};
            border: 3px solid ${theme.color.gray};
            border-radius: 10px;
            padding: 15px;
            text-align: center;
            cursor: pointer;
        `}
    `

    export const Text = styled.p`
        ${({ theme }) => `
            ${theme.font.title3};
            color: ${theme.color.white};
        `}
    `
}
