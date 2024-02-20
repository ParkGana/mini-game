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
            {name}
        </LevelStyle.Container>
    )
}
