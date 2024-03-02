import { createSlice } from '@reduxjs/toolkit'
import { PuzzleNumberType } from './puzzle-number.type'
import { PuzzleNumberConditionEnum } from './puzzle-number.enum'

const InitialState: PuzzleNumberType = {
    number: [
        { x: 0, y: 2, value: 2 },
        { x: 2, y: 1, value: 2 }
    ],
    condition: PuzzleNumberConditionEnum.RUNNING,
    score: 0
}

const puzzleNumberSlice = createSlice({
    name: 'puzzleNumber',
    initialState: InitialState,
    reducers: {}
})

export default puzzleNumberSlice

export const {} = puzzleNumberSlice.actions
