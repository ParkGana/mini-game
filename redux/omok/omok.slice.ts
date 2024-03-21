import { createSlice } from '@reduxjs/toolkit'
import { OmokType } from './omok.type'
import { OmokConditionEnum } from './omok.enum'
import { CheckHorizontal, CheckLeftDiagonal, CheckRightDiagonal, CheckVertical } from '@/src/tool/omok.tool'

const InitialState: OmokType = {
    user1: [],
    user2: [],
    turn: 1,
    condition: OmokConditionEnum.RUNNING
}

const omokSlice = createSlice({
    name: 'omok',
    initialState: InitialState,
    reducers: {
        /* 게임 초기화 */
        resetGame: (state, action) => {
            state.user1 = []
            state.user2 = []
            state.turn = 1
            state.condition = OmokConditionEnum.RUNNING
        },

        /* 돌 위치 선택 */
        setStone: (state, action) => {
            const { x, y } = action.payload

            if (state.condition === OmokConditionEnum.RUNNING) {
                let arr = (state.turn === 1 ? state.user1 : state.user2).concat({ x, y })

                if (CheckHorizontal(arr) || CheckVertical(arr) || CheckLeftDiagonal(arr) || CheckRightDiagonal(arr)) {
                    state.condition = state.turn === 1 ? OmokConditionEnum.USER1 : OmokConditionEnum.USER2
                }

                if (state.turn === 1) {
                    state.user1.push({ x, y })
                    state.turn = 2
                } else if (state.turn === 2) {
                    state.user2.push({ x, y })
                    state.turn = 1
                }
            }
        }
    }
})

export default omokSlice

export const { resetGame, setStone } = omokSlice.actions
