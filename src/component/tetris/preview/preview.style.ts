import styled from 'styled-components'

export namespace PreviewStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            justify-items: center;
            gap: 20px;
            border: 3px solid ${theme.color.gray};
            text-align: center;
            padding: 10px;

        `}
    `

    export const SafetyContainer = styled.div`
        height: 70px;
        display: grid;
        align-items: center;
    `

    export const Text = styled.div`
        ${({ theme }) => `
            ${theme.font.title3};
            color: ${theme.color.white};
        `}
    `
}
