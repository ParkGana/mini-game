import styled from 'styled-components'

export namespace ResultStyle {
    export const Background = styled.div`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        justify-items: center;
        align-items: center;
    `

    export const Container = styled.div`
        ${({ theme }) => `
            background-color: ${theme.color.white};
            border: 5px solid ${theme.color.red};
            padding: 10px;
            z-index: 2;
        `}
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            width: 100%;
            border: 3px dashed ${theme.color.red};
            padding: 15px 25px;
        `}
    `

    export const Text = styled.p`
        ${({ theme }) => `
            ${theme.font.headline1};
            color: ${theme.color.red};
        `}
    `
}
