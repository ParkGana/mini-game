import { PuzzleNumberConditionEnum } from './puzzle-number.enum'

export interface NumberType {
    x: number
    y: number
    value: number
}

export interface PuzzleNumberType {
    number: NumberType[]
    condition: PuzzleNumberConditionEnum
    score: number
}
