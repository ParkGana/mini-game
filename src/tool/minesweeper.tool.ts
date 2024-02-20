import { MinesweeperLevelEnum } from '@/redux/enum/minesweeper.enum'

/* 단계별 데이터 생성 */
export const CreateLevelData = (level: string) => {
    switch (level) {
        // 초급
        case MinesweeperLevelEnum.EASY:
            return { row: 9, column: 9, mine: 10 }
        // 중급
        case MinesweeperLevelEnum.MEDIUM:
            return { row: 16, column: 16, mine: 40 }
        // 고급
        case MinesweeperLevelEnum.DIFFICULT:
            return { row: 16, column: 30, mine: 99 }
        default:
            return { row: 9, column: 9, mine: 10 }
    }
}

/* mine 데이터 포맷 */
export const FormatInfoMineData = (count: number) => {
    return (count < 10 ? '00' : count < 100 ? '0' : '') + count
}
