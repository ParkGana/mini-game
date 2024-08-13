import { BoardItemStyle } from './board-item.style'

export function BoardItem({ level }: { level: string }) {
    return <BoardItemStyle.Container level={level}></BoardItemStyle.Container>
}
