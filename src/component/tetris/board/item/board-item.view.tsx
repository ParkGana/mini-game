import { BoardItemStyle } from './board-item.style'

export function BoardItem({ color }: { color: string }) {
    return <BoardItemStyle.Container color={color} />
}
