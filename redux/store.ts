import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slice/example-slice'

export const store = configureStore({
    reducer: {
        example: exampleReducer
    }
})
