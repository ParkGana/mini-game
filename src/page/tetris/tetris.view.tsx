import { Board } from '@/src/component/tetris/board/board.view'
import { TetrisStyle } from './tetris.style'
import { useSelector } from 'react-redux'
import { Preview } from '@/src/component/tetris/preview/preview.view'
import { Score } from '@/src/component/tetris/score/score.view'
import { Button } from '@/src/component/tetris/button/button.view'

export function Tetris() {
    const tetris = useSelector((state: any) => state.tetris)

    return (
        <TetrisStyle.Container>
            <Board data={tetris.current} />
            <TetrisStyle.SafetyContainer>
                <TetrisStyle.DataContainer>
                    <Preview next={tetris.next} />
                    <Score />
                </TetrisStyle.DataContainer>
                <Button />
            </TetrisStyle.SafetyContainer>
        </TetrisStyle.Container>
    )
}
