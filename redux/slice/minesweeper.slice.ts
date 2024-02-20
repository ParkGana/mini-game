import { createSlice } from '@reduxjs/toolkit'
import { MinesweeperType } from '../type/minesweeper.type'
import {
    MinesweeperBoardMarkEnum,
    MinesweeperBoardViewEnum,
    MinesweeperLevelEnum,
    MinesweeperConditionEnum
} from '../enum/minesweeper.enum'
import { CreateLevelData } from '@/src/tool/minesweeper.tool'

const InitialState: MinesweeperType = {
    level: MinesweeperLevelEnum.EASY,
    row: CreateLevelData(MinesweeperLevelEnum.EASY).row,
    column: CreateLevelData(MinesweeperLevelEnum.EASY).column,
    mine: CreateLevelData(MinesweeperLevelEnum.EASY).mine,
    board: [],
    condition: MinesweeperConditionEnum.STANDBY
}

const minesweeperSlice = createSlice({
    name: 'minesweeper',
    initialState: InitialState,
    reducers: {
        /* board 생성 */
        createBoard: (state, action) => {
            const { level } = action.payload

            state.level = level
            state.row = CreateLevelData(level).row
            state.column = CreateLevelData(level).column
            state.mine = CreateLevelData(level).mine
            state.board = []
            state.condition = MinesweeperConditionEnum.STANDBY

            for (let i = 0; i < CreateLevelData(level).row * CreateLevelData(level).column; i++) {
                state.board.push({
                    idx: i,
                    view: MinesweeperBoardViewEnum.EMPTY,
                    mark: MinesweeperBoardMarkEnum.EMPTY,
                    isOpen: false
                })
            }
        }
    }
})

export default minesweeperSlice

export const { createBoard } = minesweeperSlice.actions
