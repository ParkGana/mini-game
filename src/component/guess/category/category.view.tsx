import { useCategory } from './category.hook'
import { CategoryStyle } from './category.style'

export function Category({
    selected,
    options,
    selectCallback
}: {
    selected: string
    options: string[]
    selectCallback: (result: string) => void
}) {
    const { states, refs, events } = useCategory()

    return (
        <CategoryStyle.Container ref={refs.ref} onClick={events.onToggleCategory}>
            <CategoryStyle.Text>{selected}</CategoryStyle.Text>
            <CategoryStyle.Icon src={`/icons/guess/category-arrow-${states.isOpen ? 'up' : 'down'}.png`} alt={'icon'} />
            <CategoryStyle.Option.Container isOpen={states.isOpen}>
                {options.map((option, index) => (
                    <CategoryStyle.Option.SafetyContainer key={index} onClick={() => selectCallback(option)}>
                        <CategoryStyle.Option.Text>{option}</CategoryStyle.Option.Text>
                    </CategoryStyle.Option.SafetyContainer>
                ))}
            </CategoryStyle.Option.Container>
        </CategoryStyle.Container>
    )
}
