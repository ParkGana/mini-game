import { createSlice } from '@reduxjs/toolkit'
import { BodyType, SnakeType } from './snake.type'
import { SnakeConditionEnum, SnakeDirectionEnum } from './snake.enum'
import { ChangeDirection, CheckDown, CheckLeft, CheckRight, CheckUp, RandomFruit } from '@/src/tool/snake.tool'

const InitialState: SnakeType = {
    body: [],
    direction: SnakeDirectionEnum.RIGHT,
    fruit: { x: 3, y: 10 },
    condition: SnakeConditionEnum.STANDBY,
    count: 0
}

const snakeSlice = createSlice({
    name: 'snake',
    initialState: InitialState,
    reducers: {
        /* 게임 초기화 */
        resetGame: (state, action) => {
            state.body = [{ x: 7, y: 7 }]
            state.fruit = RandomFruit(state.body)
            state.condition = SnakeConditionEnum.STANDBY
            state.count = 0
        },

        /* 게임 시작 */
        startGame: (state, action) => {
            const { key } = action.payload

            if (state.condition === SnakeConditionEnum.STANDBY) {
                state.condition = SnakeConditionEnum.RUNNING
                state.direction =
                    key === 'ArrowUp'
                        ? SnakeDirectionEnum.UP
                        : key === 'ArrowDown'
                          ? SnakeDirectionEnum.DOWN
                          : key === 'ArrowLeft'
                            ? SnakeDirectionEnum.LEFT
                            : SnakeDirectionEnum.RIGHT

                snakeSlice.caseReducers.moveSnake(state, {
                    type: 'snake/moveSnake',
                    payload: {}
                })
            }
        },

        /* 스네이크 이동 */
        moveSnake: (state, action) => {
            if (state.condition === SnakeConditionEnum.EAT) {
                state.body.push({ x: state.body[state.body.length - 1].x, y: state.body[state.body.length - 1].y })

                for (let i = state.body.length - 2; i > 0; i--) {
                    state.body[i].x = state.body[i - 1].x
                    state.body[i].y = state.body[i - 1].y
                }

                if (state.direction === SnakeDirectionEnum.UP) {
                    state.body[0].y--
                } else if (state.direction === SnakeDirectionEnum.DOWN) {
                    state.body[0].y++
                } else if (state.direction === SnakeDirectionEnum.LEFT) {
                    state.body[0].x--
                } else if (state.direction === SnakeDirectionEnum.RIGHT) {
                    state.body[0].x++
                }

                state.condition = SnakeConditionEnum.RUNNING
            } else if (state.condition === SnakeConditionEnum.RUNNING) {
                snakeSlice.caseReducers.finishGame(state, {
                    type: 'snake/finishGame',
                    payload: {}
                })

                // 위쪽으로 한 칸 이동
                if (state.direction === SnakeDirectionEnum.UP && CheckUp(state.body)) {
                    for (let i = state.body.length - 1; i > 0; i--) {
                        state.body[i].x = state.body[i - 1].x
                        state.body[i].y = state.body[i - 1].y
                    }

                    state.body[0].y--
                    state.direction = SnakeDirectionEnum.UP
                }
                // 아래쪽으로 한 칸 이동
                else if (state.direction === SnakeDirectionEnum.DOWN && CheckDown(state.body)) {
                    for (let i = state.body.length - 1; i > 0; i--) {
                        state.body[i].x = state.body[i - 1].x
                        state.body[i].y = state.body[i - 1].y
                    }

                    state.body[0].y++
                    state.direction = SnakeDirectionEnum.DOWN
                }
                // 왼쪽으로 한 칸 이동
                else if (state.direction === SnakeDirectionEnum.LEFT && CheckLeft(state.body)) {
                    for (let i = state.body.length - 1; i > 0; i--) {
                        state.body[i].x = state.body[i - 1].x
                        state.body[i].y = state.body[i - 1].y
                    }

                    state.body[0].x--
                    state.direction = SnakeDirectionEnum.LEFT
                }
                // 오른쪽으로 한 칸 이동
                else if (state.direction === SnakeDirectionEnum.RIGHT && CheckRight(state.body)) {
                    for (let i = state.body.length - 1; i > 0; i--) {
                        state.body[i].x = state.body[i - 1].x
                        state.body[i].y = state.body[i - 1].y
                    }

                    state.body[0].x++
                    state.direction = SnakeDirectionEnum.RIGHT
                }

                snakeSlice.caseReducers.eatFruit(state, {
                    type: 'snake/eatFruit',
                    payload: {}
                })
            }
        },

        /* 과일 섭취 */
        eatFruit: (state, action) => {
            if (state.body[0].x === state.fruit.x && state.body[0].y === state.fruit.y) {
                state.fruit = RandomFruit(state.body)
                state.condition = SnakeConditionEnum.EAT
                state.count++
            }
        },

        /* 방향 변경 */
        changeDirection: (state, action) => {
            const { key } = action.payload

            state.direction = ChangeDirection(key, state.direction)
        },

        /* 게임 종료 */
        finishGame: (state, action) => {
            if (
                (state.direction === SnakeDirectionEnum.UP && !CheckUp(state.body)) ||
                (state.direction === SnakeDirectionEnum.DOWN && !CheckDown(state.body)) ||
                (state.direction === SnakeDirectionEnum.LEFT && !CheckLeft(state.body)) ||
                (state.direction === SnakeDirectionEnum.RIGHT && !CheckRight(state.body))
            ) {
                state.condition = SnakeConditionEnum.FINISH
            }
        }
    }
})

export default snakeSlice

export const { resetGame, startGame, moveSnake, eatFruit, changeDirection, finishGame } = snakeSlice.actions
