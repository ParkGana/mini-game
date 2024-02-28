import { BlockType } from '@/redux/tetris/tetris.type'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import React from 'react'

export function Board({ data }: { data: BlockType }) {
    return (
        <BoardStyle.Container>
            {[...Array(20)].map((num, yIndex) => (
                <React.Fragment key={yIndex}>
                    {[...Array(10)].map((num, xIndex) => (
                        <BoardItem
                            key={xIndex}
                            isBlock={
                                data.coordinate.filter((item) => item.x === xIndex && item.y + 5 === yIndex).length > 0
                            }
                            color={data.color}
                        />
                    ))}
                </React.Fragment>
            ))}
        </BoardStyle.Container>
    )
}
