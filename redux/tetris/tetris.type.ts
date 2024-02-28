import { TetrisConditionEnum, TetrisDirectionEnum, TetrisShapeEnum } from './tetris.enum'

export interface CoordinateType {
    x: number
    y: number
}

export interface StoreType {
    color: string
    coordinate: CoordinateType
}

export interface BlockType {
    shape: TetrisShapeEnum
    direction: TetrisDirectionEnum
    color: string
    coordinate: CoordinateType[]
}

export interface TetrisType {
    current: BlockType
    next: TetrisShapeEnum
    store: StoreType[]
    condition: TetrisConditionEnum
}
