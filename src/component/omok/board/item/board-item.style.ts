import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div`
        width: 40px;
        height: 40px;
        position: relative;
        display: grid;
        align-items: center;
        justify-items: center;
    `

    export const VerticalLine = styled.div`
        ${({ theme }) => `
            height: 80px;
            position: absolute;
            border: 1px solid ${theme.color.black};
        `}
    `

    export const HorizontalLine = styled.div`
        ${({ theme }) => `
            width: 80px;
            position: absolute;
            border: 1px solid ${theme.color.black};
        `}
    `

    export const Point = styled.div`
        ${({ theme }) => `
            width: 16px;
            height: 16px;
            position: absolute;
            cursor: pointer;
            z-index: 1;

            :hover {
                background-color: ${theme.color.gray};
                border-radius: 8px;
            }
        `}
    `
}
