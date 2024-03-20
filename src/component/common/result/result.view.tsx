import { ResultStyle } from './result.style'

export function Result({ message }: { message: string }) {
    return (
        <ResultStyle.Background>
            <ResultStyle.Container>
                <ResultStyle.SafetyContainer>
                    <ResultStyle.Text>{message}</ResultStyle.Text>
                </ResultStyle.SafetyContainer>
            </ResultStyle.Container>
        </ResultStyle.Background>
    )
}
