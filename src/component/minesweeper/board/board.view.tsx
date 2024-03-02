import { BoardType } from '@/redux/minesweeper/minesweeper.type'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import { useSelector } from 'react-redux'

export function Board() {
    const minesweeper = useSelector((state: any) => state.minesweeper)

    return (
        <BoardStyle.Container row={minesweeper.row} column={minesweeper.column}>
            {minesweeper.board.map((item: BoardType, index: number) => (
                <BoardItem key={index} data={item} />
            ))}
        </BoardStyle.Container>
    )
}
