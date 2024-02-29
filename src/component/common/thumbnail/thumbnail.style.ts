import styled from 'styled-components'

export namespace ThumbnailStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            align-content: start;
            gap: 20px;
            border: 5px solid ${theme.color.gray};
            border-radius: 20px;
            padding: 20px;
            cursor: pointer;
        `}
    `

    export const Title = styled.div`
        ${({ theme }) => `
            ${theme.font.title1};
            color: ${theme.color.black};
            text-align: center;
        `}
    `
}
