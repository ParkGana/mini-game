import { GuessCharacterCategoryEnum, GuessTypeEnum } from '@/redux/guess/guess.enum'
import { checkAnswer, createQuiz } from '@/redux/guess/guess.slice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export function useGuess(type: GuessTypeEnum) {
    const dispatch = useDispatch()

    const [category, setCategory] = useState<string>(GuessCharacterCategoryEnum.ALL)

    useEffect(() => {
        dispatch(createQuiz({ type: type, category: GuessCharacterCategoryEnum.ALL }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /* 카테고리 변경 */
    const onChangeCategory = (result: string) => {
        setCategory(result)
        dispatch(createQuiz({ type: type, category: result }))
    }

    /* 정답 확인 */
    const onCheckAnswer = () => {
        dispatch(checkAnswer({}))
    }

    /* 다음 문제로 이동 */
    const onMoveNext = () => {
        dispatch(createQuiz({ type: type, category }))
    }

    return {
        datas: {
            category
        },
        events: {
            onChangeCategory,
            onCheckAnswer,
            onMoveNext
        }
    }
}
