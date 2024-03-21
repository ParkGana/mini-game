import { OmokStyle } from './omok.style'
import { Board } from '@/src/component/omok/board/board.view'
import { Button } from '@/src/component/omok/button/button.view'
import { Layout } from '@/src/component/common/layout/layout.view'
import { User } from '@/src/component/omok/user/user.view'
import { useOmok } from './omok.hook'

export function Omok() {
    const { events } = useOmok()

    return (
        <Layout>
            <OmokStyle.Container>
                <OmokStyle.TopContainer>
                    <User />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </OmokStyle.TopContainer>

                <Board />
            </OmokStyle.Container>
        </Layout>
    )
}
