import { BoardItemStyle } from './board-item.style'
import { ThreesData } from '@/redux/threes/threes.data'

export function BoardItem({ value }: { value: number }) {
    return (
        <BoardItemStyle.Container color={ThreesData.filter((item) => item.value === value)[0].background}>
            <BoardItemStyle.Text color={ThreesData.filter((item) => item.value === value)[0].text}>
                {value}
            </BoardItemStyle.Text>
        </BoardItemStyle.Container>
    )
}
