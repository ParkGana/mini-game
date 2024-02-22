import { configureStore } from '@reduxjs/toolkit'
import minesweeperSlice from './minesweeper/minesweeper.slice'

export const store = configureStore({
    reducer: {
        minesweeper: minesweeperSlice.reducer
    }
})
