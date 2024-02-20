import { Image } from '../../common/image/image.view'
import { ConditionStyle } from './condition.style'

export function Condition({ condition }: { condition: string }) {
    return (
        <ConditionStyle.Container>
            <Image
                src={`/icons/minesweeper/condition-${condition.replace('STANDBY', 'RUNNING').toLowerCase()}.png`}
                alt="icon"
            />
        </ConditionStyle.Container>
    )
}
