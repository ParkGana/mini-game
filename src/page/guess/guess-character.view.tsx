import { GuessCharacterCategoryEnum, GuessTypeEnum } from '@/redux/guess/guess.enum'
import { GuessStyle } from './guess.style'
import { Category } from '@/src/component/guess/category/category.view'
import { useGuess } from './guess.hook'
import { useSelector } from 'react-redux'
import { Image } from '@/src/component/common/image/image.view'
import { Answer } from '@/src/component/guess/answer/answer.view'
import { Home } from '@/src/component/common/home/home.view'

export function GuessCharacter() {
    const character = useSelector((state: any) => state.guess)

    const { datas, events } = useGuess(GuessTypeEnum.CHARACTER)

    return (
        <GuessStyle.Container>
            <Home />
            <Category
                selected={datas.category}
                options={[
                    GuessCharacterCategoryEnum.ALL,
                    GuessCharacterCategoryEnum.ANPANMAN,
                    GuessCharacterCategoryEnum.SPONGEBOB,
                    GuessCharacterCategoryEnum.DORAEMON,
                    GuessCharacterCategoryEnum.DISNEYPRINCESS,
                    GuessCharacterCategoryEnum.CONAN,
                    GuessCharacterCategoryEnum.PORORO,
                    GuessCharacterCategoryEnum.SANRIO,
                    GuessCharacterCategoryEnum.ONEPIECE,
                    GuessCharacterCategoryEnum.CRAYON,
                    GuessCharacterCategoryEnum.POKEMON
                ]}
                selectCallback={events.onChangeCategory}
            />

            <GuessStyle.SafetyContainer>
                <Answer
                    answer={character.name}
                    isOpen={character.isOpen}
                    checkCallback={events.onCheckAnswer}
                    moveCallback={events.onMoveNext}
                />
                <Image src={`/images/guess-character/${character.category}/${character.name}.png`} alt="image" />
            </GuessStyle.SafetyContainer>
        </GuessStyle.Container>
    )
}
