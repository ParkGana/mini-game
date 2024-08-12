import { useSelector } from 'react-redux'
import { ScoreStyle } from './score.style'

export function Score() {
    const threes = useSelector((state: any) => state.threes)

    return (
        <ScoreStyle.Container>
            <ScoreStyle.Title>SCORE</ScoreStyle.Title>
            <ScoreStyle.Score>{threes.score}</ScoreStyle.Score>
        </ScoreStyle.Container>
    )
}
