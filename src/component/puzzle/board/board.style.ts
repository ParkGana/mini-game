import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div<{ level: string; size: number }>`
        ${({ theme, level, size }) => `
            position: relative;
            display: grid;
            border: 1px solid ${theme.color.black};

            ${theme.ratio.size({
                web: `
                    grid-template-rows: repeat(${size}, ${
                        level === '초급' ? '270' : level === '중급' ? '180' : '135'
                    }px);
                    grid-template-columns: repeat(${size}, ${
                        level === '초급' ? '270' : level === '중급' ? '180' : '135'
                    }px);
                `,
                tablet: `
                    grid-template-rows: repeat(${size}, ${
                        level === '초급' ? '240' : level === '중급' ? '160' : '120'
                    }px);
                    grid-template-columns: repeat(${size}, ${
                        level === '초급' ? '240' : level === '중급' ? '160' : '120'
                    }px);
                `,
                mobile: `
                    grid-template-rows: repeat(${size}, ${
                        level === '초급' ? '210' : level === '중급' ? '140' : '105'
                    }px);
                    grid-template-columns: repeat(${size}, ${
                        level === '초급' ? '210' : level === '중급' ? '140' : '105'
                    }px);
                `
            })}
        `}
    `

    export const Image = styled.img`
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    `
}
