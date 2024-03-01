import { Image } from '../../common/image/image.view'
import { InfoStyle } from './info.style'

export function Info({ count }: { count: number }) {
    return (
        <InfoStyle.Container>
            <Image src={'/icons/snake/fruit.png'} alt="icon" />
            <InfoStyle.Count>{count}</InfoStyle.Count>
        </InfoStyle.Container>
    )
}
