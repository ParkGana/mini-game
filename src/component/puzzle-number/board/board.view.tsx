import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import { Result } from '../../common/result/result.view'
import { useSelector } from 'react-redux'
import { PuzzleNumberConditionEnum } from '@/redux/puzzle/puzzle-number.enum'

export function Board() {
    const puzzle = useSelector((state: any) => state.puzzleNumber)

    return (
        <BoardStyle.Container>
            {puzzle.value.map((item: number, index: number) => (
                <BoardItem key={index} value={item} />
            ))}

            {puzzle.condition === PuzzleNumberConditionEnum.FINISH && <Result message={'SUCCESS!'} />}
        </BoardStyle.Container>
    )
}
