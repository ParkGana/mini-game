import { TetrisDirectionEnum, TetrisShapeEnum } from '@/redux/tetris/tetris.enum'
import { BlockType } from '@/redux/tetris/tetris.type'

/* 랜덤으로 블록 선택 */
export const RandomBlock = () => {
    const block = [
        TetrisShapeEnum.O,
        TetrisShapeEnum.J,
        TetrisShapeEnum.L,
        TetrisShapeEnum.Z,
        TetrisShapeEnum.S,
        TetrisShapeEnum.I,
        TetrisShapeEnum.T
    ]

    const randomNum = Math.floor(Math.random() * block.length)

    return block[randomNum]
}

/* 블록 회전 */
export const ChangeDirection = (direction: TetrisDirectionEnum) => {
    switch (direction) {
        case TetrisDirectionEnum.TOP:
            return TetrisDirectionEnum.RIGHT

        case TetrisDirectionEnum.RIGHT:
            return TetrisDirectionEnum.BOTTOM

        case TetrisDirectionEnum.BOTTOM:
            return TetrisDirectionEnum.LEFT

        case TetrisDirectionEnum.LEFT:
            return TetrisDirectionEnum.TOP
    }
}

/* 블록 회전 시 좌표 구하기 */
export const ChangeCoordinate = (shape: TetrisShapeEnum, direction: TetrisDirectionEnum, block: BlockType[]) => {
    switch (shape) {
        case TetrisShapeEnum.O:
            break

        case TetrisShapeEnum.J:
            if (direction === TetrisDirectionEnum.TOP) {
                block[0].x += 1
                block[0].y -= 1
                // block[1].x
                block[1].y -= 2
                block[2].x -= 1
                block[2].y -= 1
                block[3].x -= 2
                // block[3].y
            } else if (direction === TetrisDirectionEnum.RIGHT) {
                // block[0].x
                block[0].y += 2
                block[1].x += 1
                block[1].y += 1
                // block[2].x
                // block[2].y
                block[3].x -= 1
                block[3].y -= 1
            } else if (direction === TetrisDirectionEnum.BOTTOM) {
                block[0].x -= 1
                // block[0].y
                // block[1].x
                block[1].y += 1
                block[2].x += 1
                // block[2].y
                block[3].x += 2
                block[3].y -= 1
            } else if (direction === TetrisDirectionEnum.LEFT) {
                // block[0].x
                block[0].y -= 1
                block[1].x -= 1
                // block[1].y
                // block[2].x
                block[2].y += 1
                block[3].x += 1
                block[3].y += 2
            }
            break

        case TetrisShapeEnum.L:
            if (direction === TetrisDirectionEnum.TOP) {
                // block[0].x
                block[0].y += 1
                block[1].x -= 1
                // block[1].y
                // block[2].x
                block[2].y -= 1
                block[3].x += 1
                block[3].y -= 2
            } else if (direction === TetrisDirectionEnum.RIGHT) {
                block[0].x -= 1
                // block[0].y
                // block[1].x
                block[1].y -= 1
                block[2].x += 1
                // block[2].y
                block[3].x += 2
                block[3].y += 1
            } else if (direction === TetrisDirectionEnum.BOTTOM) {
                // block[0].x
                block[0].y -= 2
                block[1].x += 1
                block[1].y -= 1
                // block[2].x
                // block[2].y
                block[3].x -= 1
                block[3].y += 1
            } else if (direction === TetrisDirectionEnum.LEFT) {
                block[0].x += 1
                block[0].y += 1
                // block[1].x
                block[1].y += 2
                block[2].x -= 1
                block[2].y += 1
                block[3].x -= 2
                // block[3].y
            }
            break

        case TetrisShapeEnum.Z:
            if (direction === TetrisDirectionEnum.TOP || direction === TetrisDirectionEnum.BOTTOM) {
                block[0].x += 2
                block[0].y -= 1
                block[1].x += 1
                // block[1].y
                // block[2].x
                block[2].y -= 1
                block[3].x -= 1
                // block[3].y
            } else if (direction === TetrisDirectionEnum.RIGHT || direction === TetrisDirectionEnum.LEFT) {
                block[0].x -= 2
                block[0].y += 1
                block[1].x -= 1
                // block[1].y
                // block[2].x
                block[2].y += 1
                block[3].x += 1
                // block[3].y
            }
            break

        case TetrisShapeEnum.S:
            if (direction === TetrisDirectionEnum.TOP || direction === TetrisDirectionEnum.BOTTOM) {
                block[0].x -= 2
                block[0].y -= 1
                block[1].x -= 1
                // block[1].y
                // block[2].x
                block[2].y -= 1
                block[3].x += 1
                // block[3].y
            } else if (direction === TetrisDirectionEnum.RIGHT || direction === TetrisDirectionEnum.LEFT) {
                block[0].x += 2
                block[0].y += 1
                block[1].x += 1
                // block[1].y
                // block[2].x
                block[2].y += 1
                block[3].x -= 1
                // block[3].y
            }
            break

        case TetrisShapeEnum.I:
            if (direction === TetrisDirectionEnum.TOP || direction === TetrisDirectionEnum.BOTTOM) {
                block[0].x += 2
                block[0].y -= 1
                block[1].x += 1
                // block[1].y
                // block[2].x
                block[2].y += 1
                block[3].x -= 1
                block[3].y += 2
            } else if (direction === TetrisDirectionEnum.RIGHT || direction === TetrisDirectionEnum.LEFT) {
                block[0].x -= 2
                block[0].y += 1
                block[1].x -= 1
                // block[1].y
                // block[2].x
                block[2].y -= 1
                block[3].x += 1
                block[3].y -= 2
            }
            break

        case TetrisShapeEnum.T:
            if (direction === TetrisDirectionEnum.TOP) {
                // block[0].x
                // block[0].y
                // block[1].x
                block[1].y -= 2
                block[2].x -= 1
                block[2].y -= 1
                block[3].x -= 2
                // block[3].y
            } else if (direction === TetrisDirectionEnum.RIGHT) {
                block[0].x -= 1
                block[0].y += 1
                block[1].x += 1
                block[1].y += 1
                // block[2].x
                // block[2].y
                block[3].x -= 1
                block[3].y -= 1
            } else if (direction === TetrisDirectionEnum.BOTTOM) {
                // block[0].x
                block[0].y -= 1
                // block[1].x
                block[1].y += 1
                block[2].x += 1
                // block[2].y
                block[3].x += 2
                block[3].y -= 1
            } else if (direction === TetrisDirectionEnum.LEFT) {
                block[0].x += 1
                // block[0].y
                block[1].x -= 1
                // block[1].y
                // block[2].x
                block[2].y += 1
                block[3].x += 1
                block[3].y += 2
            }
            break
    }

    // 블록이 왼쪽 벽 밖으로 벗어날 경우
    if (block.filter((item) => item.x < 0).length > 0) {
        while (block.filter((item) => item.x < 0).length > 0) {
            for (let i = 0; i < block.length; i++) {
                block[i].x++
            }
        }
    }

    // 블록이 오른쪽 벽 밖으로 벗어날 경우
    if (block.filter((item) => item.x > 9).length > 0) {
        while (block.filter((item) => item.x > 9).length > 0) {
            for (let i = 0; i < block.length; i++) {
                block[i].x--
            }
        }
    }

    // 블록이 아래쪽 벽 밖으로 벗어날 경우
    if (block.filter((item) => item.y > 19).length > 0) {
        while (block.filter((item) => item.y > 19).length > 0) {
            for (let i = 0; i < block.length; i++) {
                block[i].y--
            }
        }
    }

    return block
}

/* 아래쪽으로 이동 가능한지 판단 */
export const CheckDown = (block: BlockType[], store: BlockType[]) => {
    let isWall = true
    let isStack = true

    // 블록이 아래쪽 벽에 붙어 있는 경우
    if (block.filter((item) => item.y === 19).length > 0) {
        isWall = false
    }

    // 블록 아래쪽에 쌓인 블록이 있는 경우
    for (let i = 0; i < block.length; i++) {
        if (store.filter((item) => item.x === block[i].x && item.y === block[i].y + 1).length > 0) {
            isStack = false
            break
        }
    }

    return isWall && isStack
}

/* 왼쪽으로 이동 가능한지 판단 */
export const CheckLeft = (block: BlockType[], store: BlockType[]) => {
    let isWall = true
    let isStack = true

    // 블록이 왼쪽 벽에 붙어 있는 경우
    if (block.filter((item) => item.x === 0).length > 0) {
        isWall = false
    }

    // 블록 왼쪽에 쌓인 블록이 있는 경우
    for (let i = 0; i < block.length; i++) {
        if (store.filter((item) => item.x === block[i].x - 1 && item.y === block[i].y).length > 0) {
            isStack = false
            break
        }
    }

    return isWall && isStack
}

/* 오른쪽으로 이동 가능한지 판단 */
export const CheckRight = (block: BlockType[], store: BlockType[]) => {
    let isWall = true
    let isStack = true

    // 블록이 오른쪽 벽에 붙어 있는 경우
    if (block.filter((item) => item.x === 9).length > 0) {
        isWall = false
    }

    // 블록 오른쪽에 쌓인 블록이 있는 경우
    for (let i = 0; i < block.length; i++) {
        if (store.filter((item) => item.x === block[i].x + 1 && item.y === block[i].y).length > 0) {
            isStack = false
            break
        }
    }

    return isWall && isStack
}

/* 다음 블록으로 진행 가능한지 판단 */
export const CheckFinish = (store: BlockType[]) => {
    return store.filter((item) => item.y === 0).length > 0
}
