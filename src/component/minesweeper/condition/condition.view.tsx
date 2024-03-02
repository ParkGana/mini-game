import { useSelector } from 'react-redux'
import { Image } from '../../common/image/image.view'
import { useCondition } from './condition.hook'
import { ConditionStyle } from './condition.style'

export function Condition() {
    const minesweeper = useSelector((state: any) => state.minesweeper)

    const { events } = useCondition()

    return (
        <ConditionStyle.Container onClick={() => events.onResetGame(minesweeper.level)}>
            <Image
                src={`/icons/minesweeper/condition-${minesweeper.condition
                    .replace('STANDBY', 'RUNNING')
                    .toLowerCase()}.png`}
                alt="icon"
            />
        </ConditionStyle.Container>
    )
}
