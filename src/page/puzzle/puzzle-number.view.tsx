import { PuzzleNumberStyle } from './puzzle-number.style'
import { Board } from '@/src/component/puzzle/number/board/board.view'
import { Button } from '@/src/component/puzzle/number/button/button.view'
import { Score } from '@/src/component/puzzle/number/score/score.view'
import { usePuzzleNumber } from './puzzle-number.hook'
import { Layout } from '@/src/component/common/layout/layout.view'

export function PuzzleNumber() {
    const { events } = usePuzzleNumber()

    return (
        <Layout>
            <PuzzleNumberStyle.Container>
                <PuzzleNumberStyle.TopContainer>
                    <Score />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </PuzzleNumberStyle.TopContainer>

                <Board />
            </PuzzleNumberStyle.Container>
        </Layout>
    )
}
