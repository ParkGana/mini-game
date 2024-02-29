import styled from 'styled-components'

export namespace TetrisStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        padding: 20px;
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            display: grid;
            grid-template-columns : fit-content(500px) 150px;
            justify-content: space-between;
            gap: 30px;
            padding: 30px;
            background-color: ${theme.color.darkgray};
        `}
    `

    export const LeftContainer = styled.div`
        display: grid;
        align-content: space-between;
    `
}
