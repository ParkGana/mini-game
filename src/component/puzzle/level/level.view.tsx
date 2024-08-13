import { useLevel } from './level.hook'
import { LevelStyle } from './level.style'

export function Level({ selected, selectCallback }: { selected: string; selectCallback: (value: string) => void }) {
    const { events } = useLevel(selectCallback)

    return (
        <LevelStyle.Container>
            <LevelStyle.SafetyContainer selected={selected === '초급'} onClick={() => events.onSelectLevel('초급')}>
                <LevelStyle.Text>초급</LevelStyle.Text>
            </LevelStyle.SafetyContainer>
            <LevelStyle.SafetyContainer selected={selected === '중급'} onClick={() => events.onSelectLevel('중급')}>
                <LevelStyle.Text>중급</LevelStyle.Text>
            </LevelStyle.SafetyContainer>
            <LevelStyle.SafetyContainer selected={selected === '고급'} onClick={() => events.onSelectLevel('고급')}>
                <LevelStyle.Text>고급</LevelStyle.Text>
            </LevelStyle.SafetyContainer>
        </LevelStyle.Container>
    )
}
