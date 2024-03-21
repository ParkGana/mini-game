import { StoneType } from '@/redux/omok/omok.type'

/* 가로줄 성공 여부 판단 */
export const CheckHorizontal = (stone: StoneType[]) => {
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 6; j++) {
            let arr = stone.filter((item) => item.x >= j && item.x <= j + 4 && item.y === i)

            if (arr.length === 5) {
                return true
            }
        }
    }

    return false
}

/* 세로줄 성공 여부 판단 */
export const CheckVertical = (stone: StoneType[]) => {
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j <= 10; j++) {
            let arr = stone.filter((item) => item.x === j && item.y >= i && item.y <= i + 4)

            if (arr.length === 5) {
                return true
            }
        }
    }

    return false
}

/* 왼쪽 대각선 성공 여부 판단 */
export const CheckLeftDiagonal = (stone: StoneType[]) => {
    for (let i = 0; i <= 6; i++) {
        for (let j = 4; j <= 10; j++) {
            let arr = stone.filter(
                (item) =>
                    (item.x === j && item.y === i) ||
                    (item.x === j - 1 && item.y === i + 1) ||
                    (item.x === j - 2 && item.y === i + 2) ||
                    (item.x === j - 3 && item.y === i + 3) ||
                    (item.x === j - 4 && item.y === i + 4)
            )

            if (arr.length === 5) {
                return true
            }
        }
    }

    return false
}

/* 오른쪽 대각선 성공 여부 판단 */
export const CheckRightDiagonal = (stone: StoneType[]) => {
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j <= 6; j++) {
            let arr = stone.filter(
                (item) =>
                    (item.x === j && item.y === i) ||
                    (item.x === j + 1 && item.y === i + 1) ||
                    (item.x === j + 2 && item.y === i + 2) ||
                    (item.x === j + 3 && item.y === i + 3) ||
                    (item.x === j + 4 && item.y === i + 4)
            )

            if (arr.length === 5) {
                return true
            }
        }
    }

    return false
}
