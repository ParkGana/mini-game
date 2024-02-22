import { clickArea } from '@/redux/minesweeper/minesweeper.slice'
import { useDispatch } from 'react-redux'

export function useBoardItem() {
    const dispatch = useDispatch()

    /* 영역 클릭 */
    const onClickArea = (idx: number, position: string) => {
        dispatch(clickArea({ idx, position }))
    }

    return {
        events: {
            onClickArea
        }
    }
}
