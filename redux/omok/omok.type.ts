import { OmokConditionEnum } from './omok.enum'

export interface StoneType {
    x: number
    y: number
}

export interface OmokType {
    user1: StoneType[]
    user2: StoneType[]
    turn: number
    condition: OmokConditionEnum
}
