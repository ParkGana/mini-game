import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ text: string; background: string }>`
        ${({ theme, text, background }) => `
            width: 70px;
            height: 70px;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: ${background};
            border-radius: 5px;
            ${theme.font.title2};
            color: ${text};
            overflow: hidden;
        `}
    `
}
