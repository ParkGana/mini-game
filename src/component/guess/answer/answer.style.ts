import styled from 'styled-components'

export namespace AnswerStyle {
    export const Container = styled.div``

    export const SafetyContainer = styled.div`
        display: grid;
        grid-template-columns: fit-content(500px) 100px;
        align-items: center;
        justify-content: space-between;
    `

    export const Text = styled.div`
        ${({ theme }) => `
            ${theme.font.title1};
        `}
    `

    export namespace Button {
        export const Container = styled.div`
            ${({ theme }) => `
                width: 100px;
                display: grid;
                grid-template-columns: repeat(2, fit-content(100px));
                align-items: center;
                justify-content: space-between;
                border: 2px solid ${theme.color.gray};
                border-radius: 10px;
                padding: 10px;
                cursor: pointer;
            `}
        `

        export const Text = styled.div`
            ${({ theme }) => `
                ${theme.font.title3};
            `}
        `
    }
}
