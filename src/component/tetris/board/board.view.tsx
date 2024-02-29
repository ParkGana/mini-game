import { BlockType } from '@/redux/tetris/tetris.type'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import React from 'react'
import { useBoard } from './board.hook'

export function Board({ block, store }: { block: BlockType[]; store: BlockType[] }) {
    const { datas } = useBoard(block, store)

    return (
        <BoardStyle.Container>
            {datas.board.map((item, index) => (
                <BoardItem key={index} color={item.color} />
            ))}
        </BoardStyle.Container>
    )
}
