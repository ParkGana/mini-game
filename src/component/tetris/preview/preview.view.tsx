import { useSelector } from 'react-redux'
import { Image } from '../../common/image/image.view'
import { PreviewStyle } from './preview.style'

export function Preview() {
    const tetris = useSelector((state: any) => state.tetris)

    return (
        <PreviewStyle.Container>
            <PreviewStyle.Text>NEXT</PreviewStyle.Text>
            <PreviewStyle.SafetyContainer>
                <Image src={`/images/tetris/${tetris.next}.png`} alt="image" />
            </PreviewStyle.SafetyContainer>
        </PreviewStyle.Container>
    )
}
