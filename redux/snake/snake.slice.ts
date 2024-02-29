import { createSlice } from '@reduxjs/toolkit'
import { SnakeType } from './snake.type'
import { SnakeConditionEnum, SnakeDirectionEnum } from './snake.enum'

const InitialState: SnakeType = {
    body: [
        { x: 7, y: 7 },
        { x: 6, y: 7 },
        { x: 5, y: 7 }
    ],
    direction: SnakeDirectionEnum.RIGHT,
    fruit: { x: 3, y: 10 },
    condition: SnakeConditionEnum.STANDBY,
    count: 0
}

const snakeSlice = createSlice({
    name: 'snake',
    initialState: InitialState,
    reducers: {}
})

export default snakeSlice

export const {} = snakeSlice.actions
