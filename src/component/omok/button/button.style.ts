import styled from 'styled-components'

export namespace ButtonStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            background-color: ${theme.color.black};
            border-radius: 10px;
            ${theme.font.title3};
            text-align: center;
            color: ${theme.color.white};
            padding: 15px;
            cursor: pointer;
        `}
    `
}
