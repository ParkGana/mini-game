import { PuzzleLevelEnum } from '@/redux/puzzle/puzzle.enum'
import { changeLevel, createBoard, startGame } from '@/redux/puzzle/puzzle.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function usePuzzle() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createBoard({ level: PuzzleLevelEnum.EASY }))

        setTimeout(() => {
            dispatch(startGame({}))
        }, 3000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /* 난이도 변경 */
    const onChangeLevel = (level: string) => {
        dispatch(changeLevel({ level }))
    }

    const onClickButton = (level: string) => {
        dispatch(createBoard({ level }))

        setTimeout(() => {
            dispatch(startGame({}))
        }, 3000)
    }

    return {
        events: {
            onChangeLevel,
            onClickButton
        }
    }
}
