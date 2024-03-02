import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import React from 'react'
import { Result } from '../../common/result/result.view'
import { useSelector } from 'react-redux'
import { PuzzleNumberConditionEnum } from '@/redux/puzzle/puzzle-number.enum'
import { NumberType } from '@/redux/puzzle/puzzle-number.type'
import { useBoard } from './board.hook'

export function Board({ number }: { number: NumberType[] }) {
    const { datas } = useBoard(number)

    const puzzle = useSelector((state: any) => state.puzzleNumber)

    return (
        <BoardStyle.Container>
            {datas.board.map((item, index) => (
                <BoardItem key={index} value={item.value} />
            ))}

            {puzzle.condition === PuzzleNumberConditionEnum.FINISH && <Result message={'SUCCESS!'} />}
        </BoardStyle.Container>
    )
}
