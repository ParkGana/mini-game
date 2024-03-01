import { BlockType } from '@/redux/tetris/tetris.type'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import React from 'react'
import { useBoard } from './board.hook'
import { useSelector } from 'react-redux'
import { TetrisConditionEnum } from '@/redux/tetris/tetris.enum'
import { Result } from '../../common/result/result.view'

export function Board({ block, store }: { block: BlockType[]; store: BlockType[] }) {
    const { datas } = useBoard(block, store)

    const tetris = useSelector((state: any) => state.tetris)

    return (
        <BoardStyle.Container>
            {datas.board.map((item, index) => (
                <BoardItem key={index} color={item.color} />
            ))}

            {tetris.condition === TetrisConditionEnum.FINISH && <Result message={'FAIL!'} />}
        </BoardStyle.Container>
    )
}
