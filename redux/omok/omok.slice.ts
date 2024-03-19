import { createSlice } from '@reduxjs/toolkit'
import { OmokType } from './omok.type'
import { OmokConditionEnum } from './omok.enum'

const InitialState: OmokType = {
    user1: [],
    user2: [],
    condition: OmokConditionEnum.RUNNING
}

const omokSlice = createSlice({
    name: 'omok',
    initialState: InitialState,
    reducers: {}
})

export default omokSlice

export const {} = omokSlice.actions
