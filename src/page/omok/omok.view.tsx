import { OmokStyle } from './omok.style'
import { Board } from '@/src/component/omok/board/board.view'
import { Button } from '@/src/component/omok/button/button.view'
import { Layout } from '@/src/component/common/layout/layout.view'
import { User } from '@/src/component/omok/user/user.view'

export function Omok() {
    return (
        <Layout>
            <OmokStyle.Container>
                <OmokStyle.TopContainer>
                    <User />
                    <Button name={'RESET'} clickCallback={() => {}} />
                </OmokStyle.TopContainer>

                <Board />
            </OmokStyle.Container>
        </Layout>
    )
}
