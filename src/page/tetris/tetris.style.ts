import styled from 'styled-components'

export namespace TetrisStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 550px;
            display: grid;
            grid-template-columns : fit-content(500px) 150px;
            justify-content: space-between;
            padding: 30px;
            margin: 20px auto;
            background-color: ${theme.color.darkgray};
        `}
    `

    export const SafetyContainer = styled.div`
        display: grid;
        align-content: space-between;
    `
}
