import { MinesweeperLevelEnum } from '@/redux/minesweeper/minesweeper.enum'

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

/* mine 및 time 데이터 포맷 */
export const FormatInfoData = (data: number) => {
    return (data < 10 ? '00' : data < 100 ? '0' : '') + data
}

/* 선택한 영역의 주위 영역 추출 */
export function GetAroundArea(row: number, column: number, idx: number) {
    // 왼쪽 상단 영역 ([0, 0])
    if (idx === 0) {
        return [idx + 1, idx + column, idx + column + 1]
    }

    // 오른쪽 상단 영역 ([0, column - 1])
    if (idx === column - 1) {
        return [idx - 1, idx + column - 1, idx + column]
    }

    // 왼쪽 하단 영역 ([row - 1, 0])
    if (idx === (row - 1) * column) {
        return [idx - column, idx - column + 1, idx + 1]
    }

    // 오른쪽 하단 영역 ([row - 1, column - 1])
    if (idx === row * column - 1) {
        return [idx - column - 1, idx - column, idx - 1]
    }

    // 상단 라인 영역 ([0, 0 ~ column - 1])
    if (idx >= 0 && idx <= column - 1) {
        return [idx - 1, idx + 1, idx + column - 1, idx + column, idx + column + 1]
    }

    // 하단 라인 영역 ([row - 1, 0 ~ column - 1])
    if (idx >= (row - 1) * column && idx <= row * column - 1) {
        return [idx - column - 1, idx - column, idx - column + 1, idx - 1, idx + 1]
    }

    // 왼쪽 라인 영역 ([0 ~ row - 1, 0])
    if (idx % column === 0) {
        return [idx - column, idx - column + 1, idx + 1, idx + column, idx + column + 1]
    }

    // 오른쪽 라인 영역 ([0 ~ row - 1, column - 1])
    if (idx % column === column - 1) {
        return [idx - column - 1, idx - column, idx - 1, idx + column - 1, idx + column]
    }

    // 나머지 영역
    return [
        idx - column - 1,
        idx - column,
        idx - column + 1,
        idx - 1,
        idx + 1,
        idx + column - 1,
        idx + column,
        idx + column + 1
    ]
}

/* 랜덤으로 지뢰 위치 설정 */
export function MakeRandomMine(row: number, column: number, mine: number, exception: number) {
    let mineSet = new Set<number>([])

    while (mineSet.size < mine) {
        const randomNum = Math.floor(Math.random() * row * column)

        const exceptionArr = GetAroundArea(row, column, exception)

        if (randomNum !== exception && !exceptionArr.includes(randomNum)) {
            mineSet.add(randomNum)
        }
    }

    return Array.from(mineSet)
}
