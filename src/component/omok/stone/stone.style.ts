import styled from 'styled-components'

export namespace StoneStyle {
    export const Container = styled.div<{ user: number }>`
        ${({ theme, user }) => `
            background-color: ${user === 1 ? theme.color.white : theme.color.black};
            border-radius: 50%;
            z-index: 1;

            ${theme.ratio.size({
                web: `
                    width: 36px;
                    height: 36px;
                `,
                tablet: `
                    width: 36px;
                    height: 36px;
                `,
                mobile: `
                    width: 30px;
                    height: 30px;
                `
            })}
        `}
    `
}
