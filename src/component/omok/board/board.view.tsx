import React from 'react'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import { useSelector } from 'react-redux'
import { OmokConditionEnum } from '@/redux/omok/omok.enum'
import { Result } from '../../common/result/result.view'

export function Board() {
    const omok = useSelector((state: any) => state.omok)

    return (
        <BoardStyle.Container>
            {[...Array(11)].map((num, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {[...Array(11)].map((num, colIndex) => (
                        <BoardItem key={colIndex} x={colIndex} y={rowIndex} />
                    ))}
                </React.Fragment>
            ))}

            {omok.condition === OmokConditionEnum.USER1 && <Result message={'user1 WIN!'} />}
            {omok.condition === OmokConditionEnum.USER2 && <Result message={'user2 WIN!'} />}
        </BoardStyle.Container>
    )
}
