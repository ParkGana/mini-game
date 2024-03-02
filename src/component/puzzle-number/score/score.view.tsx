import { ScoreStyle } from './score.style'

export function Score({ score }: { score: number }) {
    return (
        <ScoreStyle.Container>
            <ScoreStyle.Title>SCORE</ScoreStyle.Title>
            <ScoreStyle.Score>{score}</ScoreStyle.Score>
        </ScoreStyle.Container>
    )
}
