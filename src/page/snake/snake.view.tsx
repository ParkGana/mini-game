import { Home } from '@/src/component/common/home/home.view'
import { SnakeStyle } from './snake.style'
import { Board } from '@/src/component/snake/board/board.view'
import { Info } from '@/src/component/snake/info/info.view'
import { Button } from '@/src/component/snake/button/button.view'
import { useSelector } from 'react-redux'
import { useSnake } from './snake.hook'

export function Snake() {
    const snake = useSelector((state: any) => state.snake)

    const { events } = useSnake(snake.condition)

    return (
        <SnakeStyle.Container>
            <Home />
            <SnakeStyle.SafetyContainer>
                <SnakeStyle.TopContainer>
                    <Info count={snake.count} />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </SnakeStyle.TopContainer>
                <Board body={snake.body} fruit={snake.fruit} />
            </SnakeStyle.SafetyContainer>
        </SnakeStyle.Container>
    )
}
