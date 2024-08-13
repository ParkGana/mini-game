import React from 'react'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import { useSelector } from 'react-redux'
import { PuzzleConditionEnum } from '@/redux/puzzle/puzzle.enum'
import { Result } from '../../common/result/result.view'
import { Instruction } from '../../common/instruction/Instruction.view'

export function Board() {
    const puzzle = useSelector((state: any) => state.puzzle)

    return (
        <BoardStyle.Container level={puzzle.level} size={puzzle.size}>
            {puzzle.resource && (
                <>
                    {[...Array(puzzle.size)].map((num, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            {[...Array(puzzle.size)].map((num, colIndex) => (
                                <BoardItem
                                    key={colIndex}
                                    order={puzzle.resource.order[rowIndex * puzzle.size + colIndex]}
                                />
                            ))}
                        </React.Fragment>
                    ))}

                    <BoardStyle.Image src={`/images/puzzle/${puzzle.resource.image}.png`} alt="image" />

                    {puzzle.condition === PuzzleConditionEnum.STANDBY && (
                        <Instruction message={'사진을 잘 기억하시고 퍼즐을 완성해주세요.'} />
                    )}
                    {puzzle.condition === PuzzleConditionEnum.SUCCESS && <Result message={'SUCCESS!'} />}
                </>
            )}
        </BoardStyle.Container>
    )
}
