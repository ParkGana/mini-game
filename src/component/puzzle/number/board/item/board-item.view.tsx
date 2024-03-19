import { BoardItemStyle } from './board-item.style'
import { PuzzleNumberData } from '@/redux/puzzle/puzzle-number.data'

export function BoardItem({ value }: { value: number }) {
    return (
        <BoardItemStyle.Container
            text={PuzzleNumberData.filter((item) => item.value === value)[0].text}
            background={PuzzleNumberData.filter((item) => item.value === value)[0].background}
        >
            {value}
        </BoardItemStyle.Container>
    )
}
