import styled from 'styled-components'

export namespace StoneStyle {
    export const Container = styled.div<{ user: number }>`
        ${({ theme, user }) => `
            width: 36px;
            height: 36px;
            background-color: ${user === 1 ? theme.color.black : theme.color.white};
            border-radius: 18px;
            z-index: 1;
        `}
    `
}
