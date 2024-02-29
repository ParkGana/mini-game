import { useRouter } from 'next/router'
import { Image } from '../image/image.view'
import { HomeStyle } from './home.style'

export function Home() {
    const router = useRouter()

    return (
        <HomeStyle.Container onClick={() => router.push('/')}>
            <Image src={'/icons/home.png'} alt="icon" />
        </HomeStyle.Container>
    )
}
