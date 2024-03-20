import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            position: relative;
            display: grid;
            background-color: ${theme.color.lightbrown};
            border: 1px solid ${theme.color.black};

            ${theme.ratio.size({
                web: `
                    grid-template-rows: repeat(11, 40px);
                    grid-template-columns: repeat(11, 40px);
                    padding: 20px;
                `,
                tablet: `
                    grid-template-rows: repeat(11, 40px);
                    grid-template-columns: repeat(11, 40px);
                    padding: 20px;
                `,
                mobile: `
                    grid-template-rows: repeat(11, 35px);
                    grid-template-columns: repeat(11, 35px);
                    padding: 17.5px;
                `
            })}
        `}
    `
}
