import { useSelector } from 'react-redux'
import { BoardItemStyle } from './board-item.style'
import { StoneType } from '@/redux/omok/omok.type'
import { Stone } from '../../stone/stone.view'

export function BoardItem({ x, y }: { x: number; y: number }) {
    const omok = useSelector((state: any) => state.omok)

    return (
        <BoardItemStyle.Container>
            <BoardItemStyle.VerticalLine />
            <BoardItemStyle.HorizontalLine />
            <BoardItemStyle.Point />

            {omok.user1.filter((item: StoneType) => item.x === x && item.y === y).length > 0 && <Stone user={1} />}
            {omok.user2.filter((item: StoneType) => item.x === x && item.y === y).length > 0 && <Stone user={2} />}
        </BoardItemStyle.Container>
    )
}
