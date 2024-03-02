import { Board } from '@/src/component/tetris/board/board.view'
import { TetrisStyle } from './tetris.style'
import { useSelector } from 'react-redux'
import { Preview } from '@/src/component/tetris/preview/preview.view'
import { Button } from '@/src/component/tetris/button/button.view'
import { useTetris } from './tetris.hook'
import { Home } from '@/src/component/common/home/home.view'

export function Tetris() {
    const tetris = useSelector((state: any) => state.tetris)

    const { events } = useTetris(tetris.condition)

    return (
        <TetrisStyle.Container>
            <Home />
            <TetrisStyle.SafetyContainer>
                <Board block={tetris.block} store={tetris.store} />
                <TetrisStyle.RightContainer>
                    <Preview next={tetris.next} />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </TetrisStyle.RightContainer>
            </TetrisStyle.SafetyContainer>
        </TetrisStyle.Container>
    )
}
