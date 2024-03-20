import { SnakeStyle } from './snake.style'
import { Board } from '@/src/component/snake/board/board.view'
import { Count } from '@/src/component/snake/count/count.view'
import { Button } from '@/src/component/snake/button/button.view'
import { useSnake } from './snake.hook'
import { Layout } from '@/src/component/common/layout/layout.view'

export function Snake() {
    const { events } = useSnake()

    return (
        <Layout>
            <SnakeStyle.Container>
                <SnakeStyle.TopContainer>
                    <Count />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </SnakeStyle.TopContainer>

                <Board />
            </SnakeStyle.Container>
        </Layout>
    )
}
