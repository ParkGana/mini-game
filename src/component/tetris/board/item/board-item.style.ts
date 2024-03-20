import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ color: string }>`
        ${({ theme, color }) => `
            background-color: ${color};
            border: 1px solid ${theme.color.gray};

            ${theme.ratio.size({
                web: `
                    width: 30px;
                    height: 30px;
                `,
                tablet: `
                    width: 30px;
                    height: 30px;
                `,
                mobile: `
                    width: 25px;
                    height: 25px;
                `
            })}
        `}
    `
}
