import { MinesweeperLevelEnum } from '@/redux/enum/minesweeper.enum'
import { createBoard } from '@/redux/slice/minesweeper.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useMinesweeper() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createBoard({ level: MinesweeperLevelEnum.EASY }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /* 난이도 변경 */
    const onChangeLevel = (level: string) => {
        dispatch(createBoard({ level }))
    }

    return {
        events: {
            onChangeLevel
        }
    }
}
