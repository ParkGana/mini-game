import { Image } from '@/src/component/common/image/image.view'
import { BoardItemStyle } from './board-item.style'

export function BoardItem({
    isEven,
    isHead,
    isBody,
    isFruit
}: {
    isEven: boolean
    isHead: boolean
    isBody: boolean
    isFruit: boolean
}) {
    return (
        <BoardItemStyle.Container isEven={isEven} isHead={isHead} isBody={isBody}>
            {isFruit && <Image src={'/icons/snake/fruit.png'} alt="icon" />}
        </BoardItemStyle.Container>
    )
}
