import { configureStore } from '@reduxjs/toolkit'
import minesweeperSlice from './minesweeper/minesweeper.slice'
import guessSlice from './guess/guess.slice'
import tetrisSlice from './tetris/tetris.slice'

export const store = configureStore({
    reducer: {
        guess: guessSlice.reducer,
        minesweeper: minesweeperSlice.reducer,
        tetris: tetrisSlice.reducer
    }
})
