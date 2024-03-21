import { resetGame } from '@/redux/omok/omok.slice'
import { useDispatch } from 'react-redux'

export function useOmok() {
    const dispatch = useDispatch()

    const onClickButton = () => {
        dispatch(resetGame({}))
    }

    return {
        events: {
            onClickButton
        }
    }
}
