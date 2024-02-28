import { BoardItemStyle } from './board-item.style'

export function BoardItem({ isBlock, color }: { isBlock: boolean; color: string }) {
    return <BoardItemStyle.Container isBlock={isBlock} color={color}></BoardItemStyle.Container>
}
