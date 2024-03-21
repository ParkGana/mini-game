import { setStone } from '@/redux/omok/omok.slice'
import { useDispatch } from 'react-redux'

export function useBoardItem(x: number, y: number) {
    const dispatch = useDispatch()

    const onSetStone = () => {
        dispatch(setStone({ x, y }))
    }

    return {
        events: {
            onSetStone
        }
    }
}
