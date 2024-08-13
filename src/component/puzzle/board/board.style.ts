import { PuzzleLevelEnum } from '@/redux/puzzle/puzzle.enum'
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
                        level === PuzzleLevelEnum.EASY ? '270' : level === PuzzleLevelEnum.MEDIUM ? '180' : '135'
                    }px);
                    grid-template-columns: repeat(${size}, ${
                        level === PuzzleLevelEnum.EASY ? '270' : level === PuzzleLevelEnum.MEDIUM ? '180' : '135'
                    }px);
                `,
                tablet: `
                    grid-template-rows: repeat(${size}, ${
                        level === PuzzleLevelEnum.EASY ? '240' : level === PuzzleLevelEnum.MEDIUM ? '160' : '120'
                    }px);
                    grid-template-columns: repeat(${size}, ${
                        level === PuzzleLevelEnum.EASY ? '240' : level === PuzzleLevelEnum.MEDIUM ? '160' : '120'
                    }px);
                `,
                mobile: `
                    grid-template-rows: repeat(${size}, ${
                        level === PuzzleLevelEnum.EASY ? '210' : level === PuzzleLevelEnum.MEDIUM ? '140' : '105'
                    }px);
                    grid-template-columns: repeat(${size}, ${
                        level === PuzzleLevelEnum.EASY ? '210' : level === PuzzleLevelEnum.MEDIUM ? '140' : '105'
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
