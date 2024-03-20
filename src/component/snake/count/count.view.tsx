import { useSelector } from 'react-redux'
import { Image } from '../../common/image/image.view'
import { CountStyle } from './count.style'

export function Count() {
    const snake = useSelector((state: any) => state.snake)

    return (
        <CountStyle.Container>
            <Image src={'/icons/snake/fruit.png'} alt="icon" />
            <CountStyle.Text>{snake.count}</CountStyle.Text>
        </CountStyle.Container>
    )
}
