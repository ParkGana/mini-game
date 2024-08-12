import { ThreesStyle } from './threes.style'
import { Board } from '@/src/component/threes/board/board.view'
import { Button } from '@/src/component/threes/button/button.view'
import { Score } from '@/src/component/threes/score/score.view'
import { useThrees } from './threes.hook'
import { Layout } from '@/src/component/common/layout/layout.view'

export function Threes() {
    const { events } = useThrees()

    return (
        <Layout>
            <ThreesStyle.Container>
                <ThreesStyle.TopContainer>
                    <Score />
                    <Button name={'RESET'} clickCallback={events.onClickButton} />
                </ThreesStyle.TopContainer>

                <Board />
            </ThreesStyle.Container>
        </Layout>
    )
}
