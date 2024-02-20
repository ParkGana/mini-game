import { useSelector } from 'react-redux'
import { MinesweeperStyle } from './minesweeper.style'
import { Board } from '@/src/component/minesweeper/board/board.view'
import { useMinesweeper } from './minesweeper.hook'
import { Level } from '@/src/component/minesweeper/level/level.view'
import { MinesweeperBoardMarkEnum, MinesweeperLevelEnum } from '@/redux/enum/minesweeper.enum'
import { Condition } from '@/src/component/minesweeper/condition/condition.view'
import { InfoMine } from '@/src/component/minesweeper/info/info-mine.view'
import { InfoTime } from '@/src/component/minesweeper/info/info-time.view'
import { BoardType } from '@/redux/type/minesweeper.type'

export function Minesweeper() {
    const { events } = useMinesweeper()

    const minesweeper = useSelector((state: any) => state.minesweeper)

    return (
        <MinesweeperStyle.Container>
            <MinesweeperStyle.LevelContainer>
                <Level
                    name={'초급'}
                    isSelected={minesweeper.level === MinesweeperLevelEnum.EASY}
                    clickCallback={() => events.onChangeLevel(MinesweeperLevelEnum.EASY)}
                />
                <Level
                    name={'중급'}
                    isSelected={minesweeper.level === MinesweeperLevelEnum.MEDIUM}
                    clickCallback={() => events.onChangeLevel(MinesweeperLevelEnum.MEDIUM)}
                />
                <Level
                    name={'고급'}
                    isSelected={minesweeper.level === MinesweeperLevelEnum.DIFFICULT}
                    clickCallback={() => events.onChangeLevel(MinesweeperLevelEnum.DIFFICULT)}
                />
            </MinesweeperStyle.LevelContainer>

            <MinesweeperStyle.SafetyContainer>
                <MinesweeperStyle.DataContainer>
                    <InfoMine
                        mine={
                            minesweeper.mine -
                            minesweeper.board.filter((item: BoardType) => item.mark !== MinesweeperBoardMarkEnum.EMPTY)
                                .length
                        }
                    />
                    <Condition condition={minesweeper.condition} level={minesweeper.level} />
                    <InfoTime />
                </MinesweeperStyle.DataContainer>

                <Board data={minesweeper} />
            </MinesweeperStyle.SafetyContainer>
        </MinesweeperStyle.Container>
    )
}
