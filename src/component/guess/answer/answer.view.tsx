import { Image } from '../../common/image/image.view'
import { AnswerStyle } from './answer.style'

export function Answer({
    answer,
    isOpen,
    checkCallback,
    moveCallback
}: {
    answer: string
    isOpen: boolean
    checkCallback: () => void
    moveCallback: () => void
}) {
    return (
        <AnswerStyle.Container>
            {isOpen ? (
                <AnswerStyle.SafetyContainer>
                    <AnswerStyle.Text>{answer}</AnswerStyle.Text>
                    <AnswerStyle.Button.Container onClick={moveCallback}>
                        <AnswerStyle.Button.Text>다음 문제</AnswerStyle.Button.Text>
                        <Image src={'/icons/guess/arrow-right.png'} alt="icon" />
                    </AnswerStyle.Button.Container>
                </AnswerStyle.SafetyContainer>
            ) : (
                <AnswerStyle.Button.Container onClick={checkCallback}>
                    <Image src={'/icons/guess/check.png'} alt="icon" />
                    <AnswerStyle.Button.Text>정답 확인</AnswerStyle.Button.Text>
                </AnswerStyle.Button.Container>
            )}
        </AnswerStyle.Container>
    )
}
