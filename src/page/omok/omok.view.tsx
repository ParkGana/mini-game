import { Home } from '@/src/component/common/home/home.view'
import { OmokStyle } from './omok.style'
import { Board } from '@/src/component/omok/board/board.view'
import { Button } from '@/src/component/omok/button/button.view'

export function Omok() {
    return (
        <OmokStyle.Container>
            <Home />
            <OmokStyle.SafetyContainer>
                <OmokStyle.TopContainer>
                    <Button name={'RESET'} clickCallback={() => {}} />
                </OmokStyle.TopContainer>
                <Board />
            </OmokStyle.SafetyContainer>
        </OmokStyle.Container>
    )
}
