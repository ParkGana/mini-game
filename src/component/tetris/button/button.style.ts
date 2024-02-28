import styled from 'styled-components'

export namespace ButtonStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            background-color: ${theme.color.black};
            border: 3px solid ${theme.color.gray};
            border-radius: 10px;
            ${theme.font.title3};
            text-align: center;
            color: ${theme.color.white};
            padding: 15px;
        `}
    `
}
