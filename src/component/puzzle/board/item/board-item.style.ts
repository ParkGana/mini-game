import { PuzzleLevelEnum } from '@/redux/puzzle/puzzle.enum'
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
                    width: ${
                        level === PuzzleLevelEnum.EASY ? '270' : level === PuzzleLevelEnum.MEDIUM ? '180' : '135'
                    }px;
                    height: ${
                        level === PuzzleLevelEnum.EASY ? '270' : level === PuzzleLevelEnum.MEDIUM ? '180' : '135'
                    }px;
                `,
                tablet: `
                    width: ${
                        level === PuzzleLevelEnum.EASY ? '240' : level === PuzzleLevelEnum.MEDIUM ? '160' : '120'
                    }px;
                    height: ${
                        level === PuzzleLevelEnum.EASY ? '240' : level === PuzzleLevelEnum.MEDIUM ? '160' : '120'
                    }px;
                `,
                mobile: `
                    width: ${
                        level === PuzzleLevelEnum.EASY ? '210' : level === PuzzleLevelEnum.MEDIUM ? '140' : '105'
                    }px;
                    height: ${
                        level === PuzzleLevelEnum.EASY ? '210' : level === PuzzleLevelEnum.MEDIUM ? '140' : '105'
                    }px;
                `
            })}
        `}
    `

    export const Image = styled.img`
        width: 100%;
        cursor: pointer;
    `
}
