import {
    MinesweeperBoardMarkEnum,
    MinesweeperBoardViewEnum,
    MinesweeperLevelEnum,
    MinesweeperConditionEnum
} from '../enum/minesweeper.enum'

export interface BoardType {
    idx: number
    view: MinesweeperBoardViewEnum | string
    mark: MinesweeperBoardMarkEnum
    isOpen: boolean
}

export interface MinesweeperType {
    level: MinesweeperLevelEnum
    row: number
    column: number
    mine: number
    board: BoardType[]
    condition: MinesweeperConditionEnum
}
