import { useLevel } from './level.hook'
import { LevelStyle } from './level.style'

export function Level({
    name,
    isSelected,
    clickCallback
}: {
    name: string
    isSelected: boolean
    clickCallback: () => void
}) {
    return (
        <LevelStyle.Container isSelected={isSelected} onClick={clickCallback}>
            <LevelStyle.Text>{name}</LevelStyle.Text>
        </LevelStyle.Container>
    )
}
