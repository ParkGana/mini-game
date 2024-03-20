import styled from 'styled-components'

export namespace PreviewStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            justify-items: center;
            gap: 20px;
            background-color: ${theme.color.black};
            border: 3px solid ${theme.color.gray};
            padding: 10px;
            text-align: center;
        `}
    `

    export const Text = styled.div`
        ${({ theme }) => `
            ${theme.font.title3};
            color: ${theme.color.white};
        `}
    `
}
