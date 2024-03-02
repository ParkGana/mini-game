import { GuessPeopleCategoryEnum, GuessTypeEnum } from '@/redux/guess/guess.enum'
import { GuessStyle } from './guess.style'
import { Category } from '@/src/component/guess/category/category.view'
import { useGuess } from './guess.hook'
import { useSelector } from 'react-redux'
import { Image } from '@/src/component/common/image/image.view'
import { Answer } from '@/src/component/guess/answer/answer.view'
import { Home } from '@/src/component/common/home/home.view'

export function GuessPeople() {
    const people = useSelector((state: any) => state.guess)

    const { datas, events } = useGuess(GuessTypeEnum.PEOPLE)

    return (
        <GuessStyle.Container>
            <Home />
            <Category
                selected={datas.category}
                options={[
                    GuessPeopleCategoryEnum.ALL,
                    GuessPeopleCategoryEnum.SINGER,
                    GuessPeopleCategoryEnum.ENTERTAINER,
                    GuessPeopleCategoryEnum.ACTOR,
                    GuessPeopleCategoryEnum.IDOL,
                    GuessPeopleCategoryEnum.BASEBALL
                ]}
                selectCallback={events.onChangeCategory}
            />

            <GuessStyle.SafetyContainer>
                <Answer checkCallback={events.onCheckAnswer} moveCallback={events.onMoveNext} />
                <Image src={`/images/guess-people/${people.category}/${people.name}.png`} alt="image" />
            </GuessStyle.SafetyContainer>
        </GuessStyle.Container>
    )
}
