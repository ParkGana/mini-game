import { Home } from '@/src/component/common/home/home.view'
import { PuzzleNumberStyle } from './puzzle-number.style'
import { Board } from '@/src/component/puzzle-number/board/board.view'
import { Button } from '@/src/component/puzzle-number/button/button.view'
import { Score } from '@/src/component/puzzle-number/score/score.view'
import { useSelector } from 'react-redux'
import { usePuzzleNumber } from './puzzle-number.hook'

export function PuzzleNumber() {
    const puzzle = useSelector((state: any) => state.puzzleNumber)

    const { events } = usePuzzleNumber(puzzle.condition)

    return (
        <PuzzleNumberStyle.Container>
            <Home />
            <PuzzleNumberStyle.SafetyContainer>
                <PuzzleNumberStyle.TopContainer>
                    <Score score={puzzle.score} />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </PuzzleNumberStyle.TopContainer>
                <Board value={puzzle.value} />
            </PuzzleNumberStyle.SafetyContainer>
        </PuzzleNumberStyle.Container>
    )
}
