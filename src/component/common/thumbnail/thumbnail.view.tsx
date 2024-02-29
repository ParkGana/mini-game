import { useRouter } from 'next/router'
import { Image } from '../image/image.view'
import { ThumbnailStyle } from './thumbnail.style'

export function Thumbnail({ title, src }: { title: string; src: string }) {
    const router = useRouter()

    return (
        <ThumbnailStyle.Container onClick={() => router.push(src)}>
            <ThumbnailStyle.Title>{title}</ThumbnailStyle.Title>
            <Image src={`/images/thumbnail/${src}.png`} alt="thumbnail" />
        </ThumbnailStyle.Container>
    )
}
