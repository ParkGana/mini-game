import { createSlice } from '@reduxjs/toolkit'
import { MinesweeperType } from '../type/minesweeper.type'
import {
    MinesweeperBoardMarkEnum,
    MinesweeperBoardViewEnum,
    MinesweeperLevelEnum,
    MinesweeperConditionEnum
} from '../enum/minesweeper.enum'
import { CreateLevelData, GetAroundArea, MakeRandomMine } from '@/src/tool/minesweeper.tool'

const InitialState: MinesweeperType = {
    level: MinesweeperLevelEnum.EASY,
    row: CreateLevelData(MinesweeperLevelEnum.EASY).row,
    column: CreateLevelData(MinesweeperLevelEnum.EASY).column,
    mine: CreateLevelData(MinesweeperLevelEnum.EASY).mine,
    board: [],
    condition: MinesweeperConditionEnum.STANDBY
}

const minesweeperSlice = createSlice({
    name: 'minesweeper',
    initialState: InitialState,
    reducers: {
        /* board 생성 */
        createBoard: (state, action) => {
            const { level } = action.payload

            state.level = level
            state.row = CreateLevelData(level).row
            state.column = CreateLevelData(level).column
            state.mine = CreateLevelData(level).mine
            state.board = []
            state.condition = MinesweeperConditionEnum.STANDBY

            for (let i = 0; i < CreateLevelData(level).row * CreateLevelData(level).column; i++) {
                state.board.push({
                    idx: i,
                    view: MinesweeperBoardViewEnum.EMPTY,
                    mark: MinesweeperBoardMarkEnum.EMPTY,
                    isOpen: false
                })
            }
        },

        /* 데이터 생성 */
        createBoardData: (state, action) => {
            const { idx } = action.payload

            const mineArr = MakeRandomMine(state.row, state.column, state.mine, idx) // mine 위치

            for (let i = 0; i < state.row * state.column; i++) {
                const aroundArr = GetAroundArea(state.row, state.column, i) // 주위 영역
                const count = aroundArr.filter((item) => mineArr.includes(item)).length // mine이 위치한 주위 영역 갯수

                // 주위 영역에 mine이 위치한 경우
                if (count > 0) {
                    state.board[i].view = count.toString()
                }

                // 현재 영역에 mine이 위치한 경우
                if (mineArr.includes(i)) {
                    state.board[i].view = MinesweeperBoardViewEnum.MINE
                }
            }
        },

        /* 영역 클릭 */
        clickArea: (state, action) => {
            const { idx, position } = action.payload

            // 아직 게임이 시작되지 않은 경우 (첫 번째 선택인 경우)
            if (state.condition === MinesweeperConditionEnum.STANDBY) {
                minesweeperSlice.caseReducers.createBoardData(state, {
                    type: 'minesweeper/createBoardData',
                    payload: { idx }
                })

                state.condition = MinesweeperConditionEnum.RUNNING
            }

            // 게임이 진행 중인 경우
            if (state.condition === MinesweeperConditionEnum.RUNNING) {
                minesweeperSlice.caseReducers.openArea(state, {
                    type: 'minesweeper/openArea',
                    payload: { idx, position }
                })
            }

            // 게임을 성공한 경우
            if (
                state.condition !== MinesweeperConditionEnum.FAIL &&
                (state.mine === state.board.filter((item) => !item.isOpen).length ||
                    state.mine ===
                        state.board.filter(
                            (item) =>
                                item.view === MinesweeperBoardViewEnum.MINE &&
                                item.mark !== MinesweeperBoardMarkEnum.EMPTY
                        ).length)
            ) {
                state.condition = MinesweeperConditionEnum.SUCCESS
            }
        },

        /* 영역 열기 */
        openArea: (state, action) => {
            const { idx, position } = action.payload

            const area = state.board[idx] // 클릭한 영역

            // 열려있지 않은 영역인 경우
            if (!area.isOpen) {
                // 왼쪽 마우스를 클릭한 경우
                if (position === 'L') {
                    // 마크해놓지 않은 영역인 경우
                    if (area.mark === MinesweeperBoardMarkEnum.EMPTY) {
                        area.isOpen = true

                        // 빈 영역인 경우
                        if (area.view === MinesweeperBoardViewEnum.EMPTY) {
                            const aroundArr = GetAroundArea(state.row, state.column, idx) // 주위 영역

                            for (let i = 0; i < aroundArr.length; i++) {
                                if (!state.board[aroundArr[i]].isOpen) {
                                    minesweeperSlice.caseReducers.clickArea(state, {
                                        type: 'minesweeper/clickArea',
                                        payload: {
                                            idx: aroundArr[i],
                                            position: 'L'
                                        }
                                    })
                                }
                            }
                        }
                        // 지뢰가 위치한 영역인 경우
                        else if (area.view === MinesweeperBoardViewEnum.MINE) {
                            state.condition = MinesweeperConditionEnum.FAIL

                            const mineArr = state.board.filter((item) => item.view === MinesweeperBoardViewEnum.MINE) // mine 위치

                            for (let i = 0; i < mineArr.length; i++) {
                                if (mineArr[i].mark === MinesweeperBoardMarkEnum.EMPTY) {
                                    mineArr[i].isOpen = true
                                }
                            }
                        }
                    }
                }
                // 오른쪽 마우스를 클릭한 경우
                else if (position === 'R') {
                    const remainMine =
                        state.mine - state.board.filter((item) => item.mark !== MinesweeperBoardMarkEnum.EMPTY).length // 남은 mine 갯수

                    // 마크해 놓은 영역이 mine 갯수보다 적은 경우
                    if (remainMine > 0 || area.mark !== MinesweeperBoardMarkEnum.EMPTY) {
                        area.mark =
                            area.mark === MinesweeperBoardMarkEnum.EMPTY
                                ? MinesweeperBoardMarkEnum.FLAG
                                : area.mark === MinesweeperBoardMarkEnum.FLAG
                                  ? MinesweeperBoardMarkEnum.QUESTION
                                  : MinesweeperBoardMarkEnum.EMPTY
                    }
                }
            }
        }
    }
})

export default minesweeperSlice

export const { createBoard, createBoardData, clickArea, openArea } = minesweeperSlice.actions
