import { MinesweeperType } from '@/redux/type/minesweeper.type'
import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'

export function Board({ data }: { data: MinesweeperType }) {
    return (
        <BoardStyle.Container row={data.row} column={data.column}>
            {data.board.map((item, index) => (
                <BoardItem key={index} data={item} />
            ))}
        </BoardStyle.Container>
    )
}
