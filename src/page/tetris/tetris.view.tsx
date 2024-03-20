import { Board } from '@/src/component/tetris/board/board.view'
import { TetrisStyle } from './tetris.style'
import { Preview } from '@/src/component/tetris/preview/preview.view'
import { Button } from '@/src/component/tetris/button/button.view'
import { useTetris } from './tetris.hook'
import { Layout } from '@/src/component/common/layout/layout.view'

export function Tetris() {
    const { events } = useTetris()

    return (
        <Layout>
            <TetrisStyle.Container>
                <Board />

                <TetrisStyle.RightContainer>
                    <Preview />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </TetrisStyle.RightContainer>
            </TetrisStyle.Container>
        </Layout>
    )
}
