import { createBoard } from '@/redux/minesweeper/minesweeper.slice'
import { useDispatch } from 'react-redux'

export function useCondition() {
    const dispatch = useDispatch()

    /* 게임 초기화 */
    const onResetGame = (level: string) => {
        dispatch(createBoard({ level }))
    }

    return {
        events: {
            onResetGame
        }
    }
}
