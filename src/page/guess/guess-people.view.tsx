import { GuessPeopleCategoryEnum } from '@/redux/guess/guess.enum'
import { GuessStyle } from './guess.style'
import { Category } from '@/src/component/guess/category/category.view'
import { useGuess } from './guess.hook'
import { useSelector } from 'react-redux'
import { Image } from '@/src/component/common/image/image.view'
import { Answer } from '@/src/component/guess/answer/answer.view'

export function GuessPeople() {
    const people = useSelector((state: any) => state.guess)

    const { datas, events } = useGuess(people.type)

    return (
        <GuessStyle.Container>
            <Category
                selected={datas.category}
                options={[
                    GuessPeopleCategoryEnum.ALL,
                    GuessPeopleCategoryEnum.ACTOR,
                    GuessPeopleCategoryEnum.SINGER,
                    GuessPeopleCategoryEnum.IDOL,
                    GuessPeopleCategoryEnum.ENTERTAINER
                ]}
                selectCallback={events.onChangeCategory}
            />

            <GuessStyle.SafetyContainer>
                <Answer
                    answer={people.name}
                    isOpen={people.isOpen}
                    checkCallback={events.onCheckAnswer}
                    moveCallback={events.onMoveNext}
                />
                <Image src={`/images/guess-people/${people.category}/${people.name}.png`} alt="image" />
            </GuessStyle.SafetyContainer>
        </GuessStyle.Container>
    )
}
