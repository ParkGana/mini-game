import { TetrisConditionEnum, TetrisDirectionEnum, TetrisShapeEnum } from './tetris.enum'

export interface BlockType {
    color: string
    x: number
    y: number
}

export interface TetrisType {
    current: TetrisShapeEnum
    direction: TetrisDirectionEnum
    block: BlockType[]
    store: BlockType[]
    next: TetrisShapeEnum
    condition: TetrisConditionEnum
}
