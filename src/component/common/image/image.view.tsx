import { ImageStyle } from './image.style'

export function Image({ src, alt }: { src: string; alt: string }) {
    return <ImageStyle.Image src={src} alt={alt} />
}
