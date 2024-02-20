import styled from 'styled-components'

export namespace LevelStyle {
    export const Container = styled.div<{ isSelected: boolean }>`
        ${({ theme, isSelected }) => `
            width: 100px;
            border: 3px solid ${theme.color.black};
            color: ${theme.color.black};
            ${theme.font.body1};
            text-align: center;
            padding: 10px;
            cursor: pointer;

            :hover {
                ${theme.font.title3};
            }

            ${
                isSelected &&
                `
                    background-color: ${theme.color.lightgray};
                    ${theme.font.title3};
                `
            };
        `}
    `
}
