import styled from 'styled-components'

export namespace TetrisStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            grid-template-columns: repeat(2, fit-content(500px));
            justify-content: space-between;
            gap: 20px;
            background-color: ${theme.color.darkgray};
            padding: 20px;
        `}
    `

    export const RightContainer = styled.div`
        display: grid;
        align-content: space-between;
    `
}
