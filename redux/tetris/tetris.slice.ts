import { createSlice } from '@reduxjs/toolkit'
import { TetrisType } from './tetris.type'
import { TetrisConditionEnum, TetrisDirectionEnum, TetrisShapeEnum } from './tetris.enum'
import { TetrisData } from './tetris.data'

const InitialState: TetrisType = {
    current: {
        shape: TetrisShapeEnum.I,
        direction: TetrisDirectionEnum.TOP,
        color: TetrisData.I.color,
        coordinate: TetrisData.I.coordinate
    },
    next: TetrisShapeEnum.T,
    store: [],
    condition: TetrisConditionEnum.STANDBY
}

const tetrisSlice = createSlice({
    name: 'tetris',
    initialState: InitialState,
    reducers: {}
})

export default tetrisSlice

export const {} = tetrisSlice.actions
