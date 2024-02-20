import { createSlice } from '@reduxjs/toolkit'
import { ExampleType } from '../type/example-type'

const InitialState: ExampleType = {
    value: 0
}

const exampleSlice = createSlice({
    name: 'example',
    initialState: InitialState,
    reducers: {
        /* value 증가 */
        increase: (state, action) => {
            state.value++
        },

        /* value 감소 */
        decrease: (state, action) => {
            state.value--
        }
    }
})

export default exampleSlice.reducer
export const { increase, decrease } = exampleSlice.actions
