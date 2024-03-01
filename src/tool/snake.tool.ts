import { SnakeDirectionEnum } from '@/redux/snake/snake.enum'
import { BodyType } from '@/redux/snake/snake.type'

/* 랜덤으로 과일 위치 선정 */
export const RandomFruit = (body: BodyType[]) => {
    let randomX = Math.floor(Math.random() * 15)
    let randomY = Math.floor(Math.random() * 15)

    while (body.filter((item) => item.x === randomX && item.y === randomY).length > 0) {
        randomX = Math.floor(Math.random() * 15)
        randomY = Math.floor(Math.random() * 15)
    }

    return { x: randomX, y: randomY }
}

/* 방향 변경 */
export const ChangeDirection = (key: string, direction: SnakeDirectionEnum) => {
    switch (key) {
        case 'ArrowUp':
            return direction === SnakeDirectionEnum.DOWN ? SnakeDirectionEnum.DOWN : SnakeDirectionEnum.UP

        case 'ArrowDown':
            return direction === SnakeDirectionEnum.UP ? SnakeDirectionEnum.UP : SnakeDirectionEnum.DOWN

        case 'ArrowLeft':
            return direction === SnakeDirectionEnum.RIGHT ? SnakeDirectionEnum.RIGHT : SnakeDirectionEnum.LEFT

        case 'ArrowRight':
            return direction === SnakeDirectionEnum.LEFT ? SnakeDirectionEnum.LEFT : SnakeDirectionEnum.RIGHT

        default:
            return direction
    }
}

/* 위쪽으로 이동 가능한지 판단 */
export const CheckUp = (body: BodyType[]) => {
    let isMove = true

    // 머리가 위쪽 벽에 붙어 있는 경우
    if (body[0].y === 0) {
        isMove = false
    }

    /* 한 칸 위에 몸통이 위치하고 있는 경우 */
    if (body.filter((item) => item.x === body[0].x && item.y === body[0].y - 1).length > 0) {
        console.log('test')
        // 한 칸 위에 위치한 몸통이 마지막 몸통이 아닌 경우
        if (body.findIndex((item) => item.x === body[0].x && item.y === body[0].y - 1) !== body.length - 1) {
            isMove = false
        }
    }

    return isMove
}

/* 아래쪽으로 이동 가능한지 판단 */
export const CheckDown = (body: BodyType[]) => {
    let isMove = true

    // 머리가 아래쪽 벽에 붙어 있는 경우
    if (body[0].y === 14) {
        isMove = false
    }

    /* 한 칸 아래에 몸통이 위치하고 있는 경우 */
    if (body.filter((item) => item.x === body[0].x && item.y === body[0].y + 1).length > 0) {
        // 한 칸 아래에 위치한 몸통이 마지막 몸통이 아닌 경우
        if (body.findIndex((item) => item.x === body[0].x && item.y === body[0].y + 1) !== body.length - 1) {
            isMove = false
        }
    }

    return isMove
}

/* 왼쪽으로 이동 가능한지 판단 */
export const CheckLeft = (body: BodyType[]) => {
    let isMove = true

    // 머리가 왼쪽 벽에 붙어 있는 경우
    if (body[0].x === 0) {
        isMove = false
    }

    /* 한 칸 옆에 몸통이 위치하고 있는 경우 */
    if (body.filter((item) => item.x === body[0].x - 1 && item.y === body[0].y).length > 0) {
        // 한 칸 옆에 위치한 몸통이 마지막 몸통이 아닌 경우
        if (body.findIndex((item) => item.x === body[0].x - 1 && item.y === body[0].y) !== body.length - 1) {
            isMove = false
        }
    }

    return isMove
}

/* 오른쪽으로 이동 가능한지 판단 */
export const CheckRight = (body: BodyType[]) => {
    let isMove = true

    // 머리가 오른쪽 벽에 붙어 있는 경우
    if (body[0].x === 14) {
        isMove = false
    }

    /* 한 칸 옆에 몸통이 위치하고 있는 경우 */
    if (body.filter((item) => item.x === body[0].x + 1 && item.y === body[0].y).length > 0) {
        // 한 칸 옆에 위치한 몸통이 마지막 몸통이 아닌 경우
        if (body.findIndex((item) => item.x === body[0].x + 1 && item.y === body[0].y) !== body.length - 1) {
            isMove = false
        }
    }

    return isMove
}
