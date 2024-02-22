import { createSlice } from '@reduxjs/toolkit'
import { GuessType } from './guess.type'
import { GuessCharacterCategoryEnum, GuessPeopleCategoryEnum, GuessTypeEnum } from './guess.enum'
import { GuessPeopleData } from './guess-people.data'
import { GuessCharacterData } from './guess-character.data'

const InitialState: GuessType = {
    type: GuessTypeEnum.CHARACTER,
    category: GuessPeopleCategoryEnum.ALL,
    name: '',
    isOpen: false
}

const guessSlice = createSlice({
    name: 'guess',
    initialState: InitialState,
    reducers: {
        /* 문제 생성 */
        createQuiz: (state, action) => {
            const { type, category } = action.payload

            const data =
                type === GuessTypeEnum.PEOPLE
                    ? category === GuessPeopleCategoryEnum.ALL
                        ? GuessPeopleData
                        : GuessPeopleData.filter((item) => item.category === category)
                    : category === GuessCharacterCategoryEnum.ALL
                      ? GuessCharacterData
                      : GuessCharacterData.filter((item) => item.category === category)

            const randomIdx = Math.floor(Math.random() * data.length)

            state.type = type
            state.category = data[randomIdx].category
            state.name = data[randomIdx].name
            state.isOpen = false
        },

        /* 정답 확인 */
        checkAnswer: (state, action) => {
            state.isOpen = true
        }
    }
})

export default guessSlice

export const { createQuiz, checkAnswer } = guessSlice.actions
