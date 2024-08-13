import React from 'react'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'

export function Board({ level }: { level: string }) {
    return (
        <BoardStyle.Container level={level} size={level === '초급' ? 2 : level === '중급' ? 3 : 4}>
            {[...Array(level === '초급' ? 2 : level === '중급' ? 3 : 4)].map((num, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {[...Array(level === '초급' ? 2 : level === '중급' ? 3 : 4)].map((num, colIndex) => (
                        <BoardItem key={colIndex} level={level} />
                    ))}
                </React.Fragment>
            ))}
            <BoardStyle.Image src={'/images/puzzle/2.png'} alt="image" />
        </BoardStyle.Container>
    )
}
