import { PuzzleLevelEnum } from '@/redux/puzzle/puzzle.enum'

/* 단계별 데이터 생성 */
export const CreateLevelData = (level: string) => {
    switch (level) {
        // 초급
        case PuzzleLevelEnum.EASY:
            return 2

        // 중급
        case PuzzleLevelEnum.MEDIUM:
            return 3

        // 고급
        case PuzzleLevelEnum.DIFFICULT:
            return 4

        default:
            return 2
    }
}

/* 랜덤으로 퍼즐 사진 결정 */
export const MakeRandomImage = () => {
    return Math.floor(Math.random() * 6) + 1
}

/* 랜덤으로 퍼즐 조각 위치 설정 */
export const MakeRandomPuzzle = (size: number) => {
    let randomArr = []
    let numArr = new Array(size * size).fill(0).map((_, i) => i)

    while (numArr.length > 0) {
        const piece = Math.floor(Math.random() * numArr.length)

        randomArr.push(numArr[piece] + 1)
        numArr = numArr.filter((item) => item !== numArr[piece])
    }

    return randomArr
}
