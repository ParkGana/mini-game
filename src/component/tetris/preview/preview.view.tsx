import { Image } from '../../common/image/image.view'
import { PreviewStyle } from './preview.style'

export function Preview({ next }: { next: string }) {
    return (
        <PreviewStyle.Container>
            <PreviewStyle.Text>NEXT</PreviewStyle.Text>
            <PreviewStyle.SafetyContainer>
                <Image src={`/images/tetris/${next}.png`} alt="image" />
            </PreviewStyle.SafetyContainer>
        </PreviewStyle.Container>
    )
}
