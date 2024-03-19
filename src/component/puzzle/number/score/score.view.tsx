import { useSelector } from 'react-redux'
import { ScoreStyle } from './score.style'

export function Score() {
    const puzzle = useSelector((state: any) => state.puzzleNumber)

    return (
        <ScoreStyle.Container>
            <ScoreStyle.Title>SCORE</ScoreStyle.Title>
            <ScoreStyle.Score>{puzzle.score}</ScoreStyle.Score>
        </ScoreStyle.Container>
    )
}
