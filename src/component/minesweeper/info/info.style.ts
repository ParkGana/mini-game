import styled from 'styled-components'

export namespace InfoStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 70px;
            text-align: center;
            background-color: ${theme.color.black};
            border-radius: 5px;
            padding: 5px;
        `}
    `

    export const Title = styled.div`
        ${({ theme }) => `
            color: ${theme.color.white};
            ${theme.font.body2};
        `}
    `

    export const Data = styled.div`
        ${({ theme }) => `
            color: ${theme.color.red};
            ${theme.font.title2};
        `}
    `
}
