import { Thumbnail } from '@/src/component/common/thumbnail/thumbnail.view'
import { HomeStyle } from './home.style'
import Link from 'next/link'

export function Home() {
    return (
        <HomeStyle.Container>
            <HomeStyle.SafetyContainer>
                <Thumbnail title={'인물 맞추기'} src={'guess-people'} />
                <Thumbnail title={'지뢰찾기'} src={'minesweeper'} />
                <Thumbnail title={'캐릭터 맞추기'} src={'guess-character'} />
                <Thumbnail title={'테트리스'} src={'tetris'} />
            </HomeStyle.SafetyContainer>
        </HomeStyle.Container>
    )
}
