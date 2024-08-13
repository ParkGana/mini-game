import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ level: string }>`
        ${({ theme, level }) => `
            display: grid;
            align-items: center;
            justify-items: center;
            border: 1px solid ${theme.color.black};

            ${theme.ratio.size({
                web: `
                    width: ${level === '초급' ? '270' : level === '중급' ? '180' : '135'}px;
                    height: ${level === '초급' ? '270' : level === '중급' ? '180' : '135'}px;
                `,
                tablet: `
                    width: ${level === '초급' ? '240' : level === '중급' ? '160' : '120'}px;
                    height: ${level === '초급' ? '240' : level === '중급' ? '160' : '120'}px;
                `,
                mobile: `
                    width: ${level === '초급' ? '210' : level === '중급' ? '140' : '105'}px;
                    height: ${level === '초급' ? '210' : level === '중급' ? '140' : '105'}px;
                `
            })}
        `}
    `
}
