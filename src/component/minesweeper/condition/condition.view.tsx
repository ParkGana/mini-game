import { Image } from '../../common/image/image.view'
import { useCondition } from './condition.hook'
import { ConditionStyle } from './condition.style'

export function Condition({ condition, level }: { condition: string; level: string }) {
    const { events } = useCondition()

    return (
        <ConditionStyle.Container onClick={() => events.onResetGame(level)}>
            <Image
                src={`/icons/minesweeper/condition-${condition.replace('STANDBY', 'RUNNING').toLowerCase()}.png`}
                alt="icon"
            />
        </ConditionStyle.Container>
    )
}
