import { Image } from '../image/image.view'
import { useLayout } from './layout.hook'
import { LayoutStyle } from './layout.style'

export function Layout({ children }: { children: React.ReactNode }) {
    const { events } = useLayout()

    return (
        <LayoutStyle.Container>
            <LayoutStyle.Home onClick={events.onMoveToHome}>
                <Image src={'/icons/common/home.png'} alt="icon" />
            </LayoutStyle.Home>

            {children}
        </LayoutStyle.Container>
    )
}
