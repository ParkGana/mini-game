import { Home } from '@/src/component/common/home/home.view'
import { SnakeStyle } from './snake.style'
import { Board } from '@/src/component/snake/board/board.view'
import { Info } from '@/src/component/snake/info/info.view'
import { Button } from '@/src/component/snake/button/button.view'
import { useSnake } from './snake.hook'

export function Snake() {
    const { events } = useSnake()

    return (
        <SnakeStyle.Container>
            <Home />
            <SnakeStyle.SafetyContainer>
                <SnakeStyle.TopContainer>
                    <Info />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </SnakeStyle.TopContainer>
                <Board />
            </SnakeStyle.SafetyContainer>
        </SnakeStyle.Container>
    )
}
