import { BodyType } from '@/redux/snake/snake.type'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import React from 'react'
import { Result } from '../../common/result/result.view'
import { useSelector } from 'react-redux'
import { SnakeConditionEnum } from '@/redux/snake/snake.enum'

export function Board() {
    const snake = useSelector((state: any) => state.snake)

    return (
        <BoardStyle.Container>
            {[...Array(16)].map((num, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {[...Array(16)].map((num, colIndex) => (
                        <BoardItem
                            key={colIndex}
                            head={
                                snake.body.filter(
                                    (item: BodyType, index: number) =>
                                        index === 0 && item.x === colIndex && item.y === rowIndex
                                ).length > 0
                            }
                            body={
                                snake.body.filter((item: BodyType) => item.x === colIndex && item.y === rowIndex)
                                    .length > 0
                            }
                            fruit={snake.fruit.x === colIndex && snake.fruit.y === rowIndex}
                        />
                    ))}
                </React.Fragment>
            ))}

            {snake.condition === SnakeConditionEnum.FINISH && <Result message={'FAIL!'} />}
        </BoardStyle.Container>
    )
}
