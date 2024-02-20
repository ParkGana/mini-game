import { configureStore } from '@reduxjs/toolkit'
import minesweeperSlice from './slice/minesweeper.slice'

export const store = configureStore({
    reducer: {
        minesweeper: minesweeperSlice.reducer
    }
})
