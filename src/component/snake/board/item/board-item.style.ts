import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ head: boolean; body: boolean }>`
        ${({ theme, head, body }) => `
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: ${head ? theme.color.green : body ? theme.color.white : theme.color.lightgreen};
            border: 1px solid ${theme.color.lightgray};

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

    export const Fruit = styled.div`
        width: 80%;
        height: 80%;
    `
}
