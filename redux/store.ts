import { configureStore } from '@reduxjs/toolkit'
import minesweeperSlice from './minesweeper/minesweeper.slice'
import guessSlice from './guess/guess.slice'

export const store = configureStore({
    reducer: {
        minesweeper: minesweeperSlice.reducer,
        guess: guessSlice.reducer
    }
})
