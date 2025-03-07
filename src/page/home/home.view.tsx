import { Thumbnail } from '@/src/component/common/thumbnail/thumbnail.view'
import { HomeStyle } from './home.style'

export function Home() {
    return (
        <HomeStyle.Container>
            <HomeStyle.SafetyContainer>
                <Thumbnail title={'그림 퍼즐'} src={'puzzle'} />
                <Thumbnail title={'스네이크'} src={'snake'} />
                <Thumbnail title={'오목'} src={'omok'} />
                <Thumbnail title={'지뢰찾기'} src={'minesweeper'} />
                <Thumbnail title={'테트리스'} src={'tetris'} />
                <Thumbnail title={'2048'} src={'threes'} />
            </HomeStyle.SafetyContainer>
        </HomeStyle.Container>
    )
}
