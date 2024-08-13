import { ButtonStyle } from './button.style'

export function Button({ name, clickCallback }: { name: string; clickCallback: () => void }) {
    return (
        <ButtonStyle.Container onClick={clickCallback}>
            <ButtonStyle.Text>{name}</ButtonStyle.Text>
        </ButtonStyle.Container>
    )
}
