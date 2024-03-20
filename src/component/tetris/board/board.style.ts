import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            position: relative;
            display: grid;
            border: 2px solid ${theme.color.gray};

            ${theme.ratio.size({
                web: `
                    grid-template-rows: repeat(20, 30px);
                    grid-template-columns: repeat(10, 30px);
                `,
                tablet: `
                    grid-template-rows: repeat(20, 30px);
                    grid-template-columns: repeat(10, 30px);
                `,
                mobile: `
                    grid-template-rows: repeat(20, 25px);
                    grid-template-columns: repeat(10, 25px);
                `
            })}
        `}
    `
}
