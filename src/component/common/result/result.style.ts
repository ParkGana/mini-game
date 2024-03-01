import styled from 'styled-components'

export namespace ResultStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 150px;
            height: 100px;
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 75px);
            display: grid;
            justify-items: center;
            align-items: center;
            background-color: ${theme.color.white};
            border: 5px solid ${theme.color.red};
            ${theme.font.headline1};
            color: ${theme.color.red};
        `}
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            border: 3px dashed ${theme.color.red};
            padding: 15px;
        `}
    `
}
