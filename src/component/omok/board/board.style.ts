import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            position: relative;
            display: grid;
            grid-template-rows: repeat(12, 40px);
            grid-template-columns: repeat(12, 40px);
            background-color: ${theme.color.beige};
            border: 2px solid ${theme.color.black};
            padding: 20px;
        `}
    `
}
