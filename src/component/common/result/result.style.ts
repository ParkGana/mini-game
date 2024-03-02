import styled from 'styled-components'

export namespace ResultStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 250px;
            height: 90px;
            position: absolute;
            top: calc(50% - 45px);
            left: calc(50% - 125px);
            display: grid;
            justify-items: center;
            align-items: center;
            padding: 0 8px;
            background-color: ${theme.color.white};
            border: 5px solid ${theme.color.red};
            ${theme.font.headline1};
            color: ${theme.color.red};
        `}
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            width: 100%;
            border: 3px dashed ${theme.color.red};
            text-align: center;
            padding: 10px;
        `}
    `
}
