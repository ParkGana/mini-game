import { Image } from '@/src/component/common/image/image.view'
import { BoardItemStyle } from './board-item.style'

export function BoardItem({ head, body, fruit }: { head: boolean; body: boolean; fruit: boolean }) {
    return (
        <BoardItemStyle.Container head={head} body={body}>
            {fruit && (
                <BoardItemStyle.Fruit>
                    <Image src={'/icons/snake/fruit.png'} alt="icon" />
                </BoardItemStyle.Fruit>
            )}
        </BoardItemStyle.Container>
    )
}
