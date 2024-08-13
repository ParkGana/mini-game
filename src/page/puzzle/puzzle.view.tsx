import { Layout } from '@/src/component/common/layout/layout.view'
import { PuzzleStyle } from './puzzle.style'
import { Board } from '@/src/component/puzzle/board/board.view'
import { Button } from '@/src/component/puzzle/button/button.view'
import { usePuzzle } from './puzzle.hook'
import { Level } from '@/src/component/puzzle/level/level.view'

export function Puzzle() {
    const { states, events } = usePuzzle()

    return (
        <Layout>
            <PuzzleStyle.Container>
                <PuzzleStyle.TopContainer>
                    <Level selected={states.level} selectCallback={events.onSelectLevel} />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </PuzzleStyle.TopContainer>

                <Board level={states.level} />
            </PuzzleStyle.Container>
        </Layout>
    )
}
