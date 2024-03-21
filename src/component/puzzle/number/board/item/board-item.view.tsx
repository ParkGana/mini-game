import { BoardItemStyle } from './board-item.style'
import { PuzzleNumberData } from '@/redux/puzzle/puzzle-number.data'

export function BoardItem({ value }: { value: number }) {
    return (
        <BoardItemStyle.Container color={PuzzleNumberData.filter((item) => item.value === value)[0].background}>
            <BoardItemStyle.Text color={PuzzleNumberData.filter((item) => item.value === value)[0].text}>
                {value}
            </BoardItemStyle.Text>
        </BoardItemStyle.Container>
    )
}
