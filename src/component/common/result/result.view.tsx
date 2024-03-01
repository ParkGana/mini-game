import { ResultStyle } from './result.style'

export function Result({ message }: { message: string }) {
    return (
        <ResultStyle.Container>
            <ResultStyle.SafetyContainer>{message}</ResultStyle.SafetyContainer>
        </ResultStyle.Container>
    )
}
