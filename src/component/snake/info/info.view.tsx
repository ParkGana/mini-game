import { useSelector } from 'react-redux'
import { Image } from '../../common/image/image.view'
import { InfoStyle } from './info.style'

export function Info() {
    const snake = useSelector((state: any) => state.snake)

    return (
        <InfoStyle.Container>
            <Image src={'/icons/snake/fruit.png'} alt="icon" />
            <InfoStyle.Count>{snake.count}</InfoStyle.Count>
        </InfoStyle.Container>
    )
}
