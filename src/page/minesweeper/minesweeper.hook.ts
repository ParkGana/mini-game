import { MinesweeperLevelEnum } from '@/redux/minesweeper/minesweeper.enum'
import { createBoard } from '@/redux/minesweeper/minesweeper.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useMinesweeper() {
    const dispatch = useDispatch()

    useEffect(() => {
        // 오른쪽 마우스 클릭 시 나타나는 팝업 제거
        window.addEventListener('contextmenu', (e) => {
            e.preventDefault()
        })

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
