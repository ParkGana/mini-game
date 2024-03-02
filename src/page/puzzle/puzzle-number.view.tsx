import { Home } from '@/src/component/common/home/home.view'
import { PuzzleNumberStyle } from './puzzle-number.style'
import { Board } from '@/src/component/puzzle-number/board/board.view'
import { Button } from '@/src/component/puzzle-number/button/button.view'
import { Score } from '@/src/component/puzzle-number/score/score.view'
import { usePuzzleNumber } from './puzzle-number.hook'

export function PuzzleNumber() {
    const { events } = usePuzzleNumber()

    return (
        <PuzzleNumberStyle.Container>
            <Home />
            <PuzzleNumberStyle.SafetyContainer>
                <PuzzleNumberStyle.TopContainer>
                    <Score />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </PuzzleNumberStyle.TopContainer>
                <Board />
            </PuzzleNumberStyle.SafetyContainer>
        </PuzzleNumberStyle.Container>
    )
}
