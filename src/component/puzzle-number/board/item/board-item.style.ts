import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 70px;
            height: 70px;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: ${theme.color.lightbrown};
            border-radius: 5px;
            overflow: hidden;
        `}
    `
}
