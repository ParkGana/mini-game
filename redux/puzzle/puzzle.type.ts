import { PuzzleConditionEnum, PuzzleLevelEnum } from './puzzle.enum'

export interface ResourceType {
    image: number
    order: number[]
}
export interface PieceType {
    id: string
    src: string
}

export interface PuzzleType {
    preview: number
    level: PuzzleLevelEnum
    size: number
    resource: ResourceType | null
    move: PieceType | null
    condition: PuzzleConditionEnum
}
