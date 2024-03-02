import { createSlice } from '@reduxjs/toolkit'
import { PuzzleNumberType } from './puzzle-number.type'
import { PuzzleNumberConditionEnum } from './puzzle-number.enum'
import { RandomNumber } from '@/src/tool/puzzle-number.tool'

const InitialState: PuzzleNumberType = {
    value: [],
    condition: PuzzleNumberConditionEnum.RUNNING,
    score: 0
}

const puzzleNumberSlice = createSlice({
    name: 'puzzleNumber',
    initialState: InitialState,
    reducers: {
        /* 게임 초기화 */
        resetGame: (state, action) => {
            state.value = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

            state.value[RandomNumber(state.value)] = 2

            while (true) {
                const randomNum = RandomNumber(state.value)

                if (state.value[randomNum] !== 2) {
                    state.value[randomNum] = 2
                    break
                }
            }

            state.condition = PuzzleNumberConditionEnum.RUNNING
            state.score = 0
        },

        /* 위쪽으로 이동 */
        moveToUp: (state, action) => {
            if (state.condition === PuzzleNumberConditionEnum.RUNNING) {
                let origin = state.value.toString()

                for (let i = 0; i < 4; i++) {
                    let line = state.value.filter((item, index) => index % 4 === i)
                    let up = line.filter((item) => item !== 0)
                    let add: number[] = []

                    let idx = 0

                    while (idx < up.length) {
                        if (up[idx] === up[idx + 1]) {
                            state.score += up[idx] + up[idx + 1]
                            add.push(up[idx] + up[idx + 1])
                            idx += 2
                        } else {
                            add.push(up[idx])
                            idx++
                        }
                    }

                    while (add.length < 4) {
                        add.push(0)
                    }

                    for (let j = 0; j < add.length; j++) {
                        state.value[j * 4 + i] = add[j]
                    }
                }

                if (origin !== state.value.toString()) {
                    state.value[RandomNumber(state.value)] = 2
                }

                puzzleNumberSlice.caseReducers.finishGame(state, {
                    type: 'puzzleNumber/finishGame',
                    payload: {}
                })
            }
        },

        /* 아래쪽으로 이동 */
        moveToDown: (state, action) => {
            if (state.condition === PuzzleNumberConditionEnum.RUNNING) {
                let origin = state.value.toString()

                for (let i = 0; i < 4; i++) {
                    let line = state.value.filter((item, index) => index % 4 === i)
                    let down = line.filter((item) => item !== 0)
                    let add: number[] = []

                    let idx = down.length - 1

                    while (idx >= 0) {
                        if (down[idx] === down[idx - 1]) {
                            state.score += down[idx] + down[idx - 1]
                            add = [down[idx] + down[idx - 1]].concat(add)
                            idx -= 2
                        } else {
                            add = [down[idx]].concat(add)
                            idx--
                        }
                    }

                    while (add.length < 4) {
                        add = [0].concat(add)
                    }

                    for (let j = 0; j < add.length; j++) {
                        state.value[j * 4 + i] = add[j]
                    }
                }

                if (origin !== state.value.toString()) {
                    state.value[RandomNumber(state.value)] = 2
                }

                puzzleNumberSlice.caseReducers.finishGame(state, {
                    type: 'puzzleNumber/finishGame',
                    payload: {}
                })
            }
        },

        /* 왼쪽으로 이동 */
        moveToLeft: (state, action) => {
            if (state.condition === PuzzleNumberConditionEnum.RUNNING) {
                let origin = state.value.toString()

                for (let i = 0; i < 4; i++) {
                    let line = state.value.filter((item, index) => Math.floor(index / 4) === i)
                    let left = line.filter((item) => item !== 0)
                    let add: number[] = []

                    let idx = 0

                    while (idx < left.length) {
                        if (left[idx] === left[idx + 1]) {
                            state.score += left[idx] + left[idx + 1]
                            add.push(left[idx] + left[idx + 1])
                            idx += 2
                        } else {
                            add.push(left[idx])
                            idx++
                        }
                    }

                    while (add.length < 4) {
                        add.push(0)
                    }

                    for (let j = 0; j < add.length; j++) {
                        state.value[i * 4 + j] = add[j]
                    }
                }

                if (origin !== state.value.toString()) {
                    state.value[RandomNumber(state.value)] = 2
                }

                puzzleNumberSlice.caseReducers.finishGame(state, {
                    type: 'puzzleNumber/finishGame',
                    payload: {}
                })
            }
        },

        /* 오른쪽으로 이동 */
        moveToRight: (state, action) => {
            if (state.condition === PuzzleNumberConditionEnum.RUNNING) {
                let origin = state.value.toString()

                for (let i = 0; i < 4; i++) {
                    let line = state.value.filter((item, index) => Math.floor(index / 4) === i)
                    let right = line.filter((item) => item !== 0)
                    let add: number[] = []

                    let idx = right.length - 1

                    while (idx >= 0) {
                        if (right[idx] === right[idx - 1]) {
                            state.score += right[idx] + right[idx - 1]
                            add = [right[idx] + right[idx - 1]].concat(add)
                            idx -= 2
                        } else {
                            add = [right[idx]].concat(add)
                            idx--
                        }
                    }

                    while (add.length < 4) {
                        add = [0].concat(add)
                    }

                    for (let j = 0; j < add.length; j++) {
                        state.value[i * 4 + j] = add[j]
                    }
                }

                if (origin !== state.value.toString()) {
                    state.value[RandomNumber(state.value)] = 2
                }

                puzzleNumberSlice.caseReducers.finishGame(state, {
                    type: 'puzzleNumber/finishGame',
                    payload: {}
                })
            }
        },

        /* 게임 종료 */
        finishGame: (state, action) => {
            if (state.value.includes(2048)) {
                state.condition = PuzzleNumberConditionEnum.FINISH
            }
        }
    }
})

export default puzzleNumberSlice

export const { resetGame, moveToUp, moveToDown, moveToLeft, moveToRight, finishGame } = puzzleNumberSlice.actions
