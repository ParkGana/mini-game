import styled from 'styled-components'

export namespace UserStyle {
    export const Container = styled.div`
        display: grid;
        grid-template-columns: repeat(2, fit-content(200px));
        gap: 30px;
    `

    export const SafetyContainer = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: 30px auto;
        gap: 10px;
    `

    export const Stone = styled.div<{ user: number }>`
        ${({ theme, user }) => `
            width: 30px;
            height: 30px;
            background-color: ${user === 1 ? theme.color.white : theme.color.black};
            border-radius: 50%;
        `}
    `

    export const Text = styled.p`
        ${({ theme }) => `
            ${theme.font.title3};
            color: ${theme.color.white};
        `}
    `
}
