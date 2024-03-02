import { Board } from '@/src/component/tetris/board/board.view'
import { TetrisStyle } from './tetris.style'
import { Preview } from '@/src/component/tetris/preview/preview.view'
import { Button } from '@/src/component/tetris/button/button.view'
import { useTetris } from './tetris.hook'
import { Home } from '@/src/component/common/home/home.view'

export function Tetris() {
    const { events } = useTetris()

    return (
        <TetrisStyle.Container>
            <Home />
            <TetrisStyle.SafetyContainer>
                <Board />
                <TetrisStyle.RightContainer>
                    <Preview />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </TetrisStyle.RightContainer>
            </TetrisStyle.SafetyContainer>
        </TetrisStyle.Container>
    )
}
