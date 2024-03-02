import { Image } from '@/src/component/common/image/image.view'
import { BoardItemStyle } from './board-item.style'

export function BoardItem({ value }: { value: number }) {
    return (
        <BoardItemStyle.Container>
            {value !== 0 && <Image src={`/images/puzzle-number/${value}.png`} alt="image" />}
        </BoardItemStyle.Container>
    )
}
