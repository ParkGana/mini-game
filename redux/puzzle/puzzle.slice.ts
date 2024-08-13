import { createSlice } from '@reduxjs/toolkit'
import { PuzzleType } from './puzzle.type'
import { PuzzleConditionEnum, PuzzleLevelEnum } from './puzzle.enum'
import { CreateLevelData, MakeRandomImage, MakeRandomPuzzle } from '@/src/tool/puzzle.tool'

const InitialState: PuzzleType = {
    preview: 5,
    level: PuzzleLevelEnum.EASY,
    size: 2,
    resource: null,
    move: null,
    condition: PuzzleConditionEnum.STANDBY
}

const puzzleSlice = createSlice({
    name: 'puzzle',
    initialState: InitialState,
    reducers: {
        /* board 생성 */
        createBoard: (state, action) => {
            const { level } = action.payload

            state.level = level
            state.size = CreateLevelData(level)
            state.resource = { image: MakeRandomImage(), order: MakeRandomPuzzle(CreateLevelData(level)) }
            state.condition = PuzzleConditionEnum.STANDBY
        },

        /* 게임 시작 */
        startGame: (state, action) => {
            state.condition = PuzzleConditionEnum.RUNNING
        },

        /* 난이도 변경 */
        changeLevel: (state, action) => {
            const { level } = action.payload

            state.level = level
            state.size = CreateLevelData(level)
            state.resource = { image: state.resource!.image, order: MakeRandomPuzzle(CreateLevelData(level)) }
            state.condition = PuzzleConditionEnum.RUNNING
        },

        /* 드래그 */
        dragPiece: (state, action) => {
            const { id, src } = action.payload

            if (state.condition === PuzzleConditionEnum.RUNNING) {
                state.move = { id, src }
            }
        },

        /* 드롭 */
        dropPiece: (state, action) => {
            const { id, src } = action.payload

            if (state.condition === PuzzleConditionEnum.RUNNING && state.move) {
                const move = <HTMLImageElement>document.getElementById(state.move.id)
                const change = <HTMLImageElement>document.getElementById(id)

                move.id = id
                move.src = src
                change.id = state.move.id
                change.src = state.move.src

                const pieces = document.querySelectorAll('.puzzle-piece')

                let arr: number[] = []

                pieces.forEach((piece) => {
                    arr.push(Number(piece.id.split('-')[1]))
                })

                if (arr.filter((item, index) => item !== index + 1).length === 0) {
                    state.condition = PuzzleConditionEnum.SUCCESS
                }
            }
        }
    }
})

export default puzzleSlice

export const { createBoard, startGame, changeLevel, dragPiece, dropPiece } = puzzleSlice.actions
