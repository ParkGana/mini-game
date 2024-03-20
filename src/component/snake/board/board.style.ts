import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            position: relative;
            display: grid;
            border: 1px solid ${theme.color.lightgray};

            ${theme.ratio.size({
                web: `
                    grid-template-rows: repeat(16, 30px);
                    grid-template-columns: repeat(16, 30px);
                `,
                tablet: `
                    grid-template-rows: repeat(16, 30px);
                    grid-template-columns: repeat(16, 30px);
                `,
                mobile: `
                    grid-template-rows: repeat(16, 25px);
                    grid-template-columns: repeat(16, 25px);
                `
            })}
        `}
    `
}
