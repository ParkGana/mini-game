import { Layout } from '@/src/component/common/layout/layout.view'
import { PuzzleStyle } from './puzzle.style'
import { Board } from '@/src/component/puzzle/board/board.view'
import { Button } from '@/src/component/puzzle/button/button.view'
import { usePuzzle } from './puzzle.hook'
import { Level } from '@/src/component/puzzle/level/level.view'
import { PuzzleLevelEnum } from '@/redux/puzzle/puzzle.enum'
import { useSelector } from 'react-redux'

export function Puzzle() {
    const puzzle = useSelector((state: any) => state.puzzle)

    const { events } = usePuzzle()

    return (
        <Layout>
            <PuzzleStyle.Container>
                <PuzzleStyle.TopContainer>
                    <PuzzleStyle.LevelContainer>
                        <Level
                            name={'초급'}
                            isSelected={puzzle.level === PuzzleLevelEnum.EASY}
                            clickCallback={() => events.onChangeLevel(PuzzleLevelEnum.EASY)}
                        />
                        <Level
                            name={'중급'}
                            isSelected={puzzle.level === PuzzleLevelEnum.MEDIUM}
                            clickCallback={() => events.onChangeLevel(PuzzleLevelEnum.MEDIUM)}
                        />
                        <Level
                            name={'고급'}
                            isSelected={puzzle.level === PuzzleLevelEnum.DIFFICULT}
                            clickCallback={() => events.onChangeLevel(PuzzleLevelEnum.DIFFICULT)}
                        />
                    </PuzzleStyle.LevelContainer>
                    <Button name={'CHANGE'} clickCallback={() => events.onClickButton(puzzle.level)} />
                </PuzzleStyle.TopContainer>
                <Board />
            </PuzzleStyle.Container>
        </Layout>
    )
}
