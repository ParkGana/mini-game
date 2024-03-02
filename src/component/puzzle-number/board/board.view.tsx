import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import React from 'react'
import { Result } from '../../common/result/result.view'
import { useSelector } from 'react-redux'
import { PuzzleNumberConditionEnum } from '@/redux/puzzle/puzzle-number.enum'

export function Board({ value }: { value: number[] }) {
    const puzzle = useSelector((state: any) => state.puzzleNumber)

    return (
        <BoardStyle.Container>
            {value.map((item, index) => (
                <BoardItem key={index} value={item} />
            ))}

            {puzzle.condition === PuzzleNumberConditionEnum.FINISH && <Result message={'SUCCESS!'} />}
        </BoardStyle.Container>
    )
}
