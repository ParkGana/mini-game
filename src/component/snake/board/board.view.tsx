import { BodyType } from '@/redux/snake/snake.type'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import React from 'react'

export function Board({ body, fruit }: { body: BodyType[]; fruit: BodyType }) {
    return (
        <BoardStyle.Container>
            {[...Array(15)].map((num, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {[...Array(15)].map((num, colIndex) => (
                        <BoardItem
                            key={colIndex}
                            isEven={(rowIndex * 15 + colIndex) % 2 === 0}
                            isHead={
                                body.filter((item, index) => index === 0 && item.x === colIndex && item.y === rowIndex)
                                    .length > 0
                            }
                            isBody={body.filter((item) => item.x === colIndex && item.y === rowIndex).length > 0}
                            isFruit={fruit.x === colIndex && fruit.y === rowIndex}
                        />
                    ))}
                </React.Fragment>
            ))}
        </BoardStyle.Container>
    )
}
