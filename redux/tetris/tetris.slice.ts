import { createSlice } from '@reduxjs/toolkit'
import { TetrisType } from './tetris.type'
import { TetrisConditionEnum, TetrisDirectionEnum, TetrisShapeEnum } from './tetris.enum'
import { TetrisData } from './tetris.data'
import {
    ChangeCoordinate,
    ChangeDirection,
    CheckDown,
    CheckFinish,
    CheckLeft,
    CheckRight,
    RandomBlock
} from '@/src/tool/tetris.tool'

const InitialState: TetrisType = {
    current: TetrisShapeEnum.J,
    direction: TetrisDirectionEnum.TOP,
    block: TetrisData['J'],
    store: [],
    next: TetrisShapeEnum.T,
    condition: TetrisConditionEnum.RUNNING
}

const tetrisSlice = createSlice({
    name: 'tetris',
    initialState: InitialState,
    reducers: {
        /* 게임 초기화 */
        resetGame: (state, action) => {
            const current = RandomBlock()

            state.current = current
            state.direction = TetrisDirectionEnum.TOP
            state.block = TetrisData[current]
            state.store = []
            state.next = RandomBlock()
            state.condition = TetrisConditionEnum.RUNNING
        },

        /* 아래쪽으로 한 칸 이동 */
        moveToDown: (state, action) => {
            if (state.condition == TetrisConditionEnum.RUNNING) {
                if (CheckDown(state.block, state.store)) {
                    for (let i = 0; i < state.block.length; i++) {
                        state.block[i].y++
                    }
                } else {
                    for (let i = 0; i < state.block.length; i++) {
                        state.store.push({
                            color: state.block[i].color,
                            x: state.block[i].x,
                            y: state.block[i].y
                        })
                    }

                    state.current = state.next
                    state.direction = TetrisDirectionEnum.TOP
                    state.block = TetrisData[state.next]
                    state.next = RandomBlock()
                }

                tetrisSlice.caseReducers.deleteBlock(state, {
                    type: 'tetris/deleteBlock',
                    payload: {}
                })

                tetrisSlice.caseReducers.finishGame(state, {
                    type: 'tetris/finishGame',
                    payload: {}
                })
            }
        },

        /* 왼쪽으로 한 칸 이동 */
        moveToLeft: (state, action) => {
            if (state.condition == TetrisConditionEnum.RUNNING) {
                if (CheckLeft(state.block, state.store)) {
                    for (let i = 0; i < state.block.length; i++) {
                        state.block[i].x--
                    }
                }

                tetrisSlice.caseReducers.deleteBlock(state, {
                    type: 'tetris/deleteBlock',
                    payload: {}
                })

                tetrisSlice.caseReducers.finishGame(state, {
                    type: 'tetris/finishGame',
                    payload: {}
                })
            }
        },

        /* 오른쪽으로 한 칸 이동 */
        moveToRight: (state, action) => {
            if (state.condition == TetrisConditionEnum.RUNNING) {
                if (CheckRight(state.block, state.store)) {
                    for (let i = 0; i < state.block.length; i++) {
                        state.block[i].x++
                    }
                }

                tetrisSlice.caseReducers.deleteBlock(state, {
                    type: 'tetris/deleteBlock',
                    payload: {}
                })

                tetrisSlice.caseReducers.finishGame(state, {
                    type: 'tetris/finishGame',
                    payload: {}
                })
            }
        },

        /* 아래쪽으로 한 번에 이동 */
        moveToDirect: (state, action) => {
            let data = state.block

            while (CheckDown(data, state.store)) {
                for (let i = 0; i < data.length; i++) {
                    data[i].y++
                }
            }

            state.block = data
        },

        /* 블록 방향 바꾸기 */
        rotateBlock: (state, action) => {
            state.block = ChangeCoordinate(state.current, state.direction, state.block)
            state.direction = ChangeDirection(state.direction)
        },

        /* 블록 삭제 */
        deleteBlock: (state, action) => {
            for (let i = 19; i > 0; i--) {
                let line = state.store.filter((item) => item.y === i)

                if (line.length === 0) {
                    break
                }

                if (line.length === 10) {
                    state.store = state.store.filter((item) => item.y !== i)

                    for (let j = 0; j < state.store.length; j++) {
                        if (state.store[j].y < i) {
                            state.store[j].y++
                        }
                    }
                }
            }
        },

        /* 게임 종료 */
        finishGame: (state, action) => {
            if (CheckFinish(state.store)) {
                state.condition = TetrisConditionEnum.FINISH
            }
        }
    }
})

export default tetrisSlice

export const { resetGame, moveToDown, moveToLeft, moveToRight, moveToDirect, rotateBlock, deleteBlock, finishGame } =
    tetrisSlice.actions
