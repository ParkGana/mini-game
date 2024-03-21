import styled from 'styled-components'

export namespace AnswerStyle {
    export const Container = styled.div`
        display: grid;
        align-items: center;
        justify-content: space-between;
        grid-template-columns: repeat(2, fit-content(300px));
    `

    export const Text = styled.p`
        ${({ theme }) => `
            ${theme.font.title1};
            color: ${theme.color.black};
        `}
    `

    export namespace Button {
        export const Container = styled.div`
            ${({ theme }) => `
                display: grid;
                align-items: center;
                grid-template-columns: repeat(2, fit-content(100px));
                gap: 5px;
                border: 2px solid ${theme.color.gray};
                border-radius: 5px;
                padding: 10px;
                cursor: pointer;
            `}
        `

        export const Text = styled.p`
            ${({ theme }) => `
                ${theme.font.title3};
                color: ${theme.color.black};
            `}
        `
    }
}
