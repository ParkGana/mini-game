import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            position: relative;
            display: grid;
            align-items: center;
            justify-items: center;

            ${theme.ratio.size({
                web: `
                    width: 40px;
                    height: 40px;
                `,
                tablet: `
                    width: 40px;
                    height: 40px;
                `,
                mobile: `
                    width: 35px;
                    height: 35px;
                `
            })}
        `}
    `

    export const VerticalLine = styled.div`
        ${({ theme }) => `
            position: absolute;
            border: 1px solid ${theme.color.black};

            ${theme.ratio.size({
                web: `
                    height: 80px;
                `,
                tablet: `
                    height: 80px;
                `,
                mobile: `
                    height: 70px;
                `
            })}
        `}
    `

    export const HorizontalLine = styled.div`
        ${({ theme }) => `
            position: absolute;
            border: 1px solid ${theme.color.black};

            ${theme.ratio.size({
                web: `
                    width: 80px;
                `,
                tablet: `
                    width: 80px;
                `,
                mobile: `
                    width: 70px;
                `
            })}
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
                background-color: ${theme.color.brown};
                border-radius: 50%;
            }
        `}
    `
}
