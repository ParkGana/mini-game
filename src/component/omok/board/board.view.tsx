import React from 'react'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'

export function Board() {
    return (
        <BoardStyle.Container>
            {[...Array(12)].map((num, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {[...Array(12)].map((num, colIndex) => (
                        <BoardItem key={colIndex} x={colIndex} y={rowIndex} />
                    ))}
                </React.Fragment>
            ))}
        </BoardStyle.Container>
    )
}
