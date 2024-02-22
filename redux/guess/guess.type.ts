import { GuessCharacterCategoryEnum, GuessPeopleCategoryEnum, GuessTypeEnum } from './guess.enum'

export interface GuessType {
    type: GuessTypeEnum
    category: GuessPeopleCategoryEnum | GuessCharacterCategoryEnum
    name: string
    isOpen: boolean
}
