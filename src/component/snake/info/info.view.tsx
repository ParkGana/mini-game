import { Image } from '../../common/image/image.view'
import { InfoStyle } from './info.style'

export function Info() {
    return (
        <InfoStyle.Container>
            <Image src={'/icons/snake/fruit.png'} alt="icon" />
            <InfoStyle.Count>0</InfoStyle.Count>
        </InfoStyle.Container>
    )
}
