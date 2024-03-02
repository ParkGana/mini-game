import { Home } from '@/src/component/common/home/home.view'
import { PuzzleNumberStyle } from './puzzle-number.style'
import { Board } from '@/src/component/puzzle-number/board/board.view'
import { Button } from '@/src/component/puzzle-number/button/button.view'
import { Score } from '@/src/component/puzzle-number/score/score.view'
import { useSelector } from 'react-redux'

export function PuzzleNumber() {
    const puzzle = useSelector((state: any) => state.puzzleNumber)

    return (
        <PuzzleNumberStyle.Container>
            <Home />
            <PuzzleNumberStyle.SafetyContainer>
                <PuzzleNumberStyle.TopContainer>
                    <Score score={0} />
                    <Button name={'RESET'} clickCallback={() => {}} />
                </PuzzleNumberStyle.TopContainer>
                <Board number={puzzle.number} />
            </PuzzleNumberStyle.SafetyContainer>
        </PuzzleNumberStyle.Container>
    )
}
