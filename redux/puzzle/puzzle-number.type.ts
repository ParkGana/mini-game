import { PuzzleNumberConditionEnum } from './puzzle-number.enum'

export interface PuzzleNumberType {
    value: number[]
    condition: PuzzleNumberConditionEnum
    score: number
}
