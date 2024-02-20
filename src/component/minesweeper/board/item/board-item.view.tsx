import { BoardType } from '@/redux/type/minesweeper.type'
import { BoardItemStyle } from './board-item.style'

export function BoardItem({ data }: { data: BoardType }) {
    return <BoardItemStyle.Container></BoardItemStyle.Container>
}
