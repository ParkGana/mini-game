import { decrease, increase } from '@/redux/slice/example-slice'
import { useDispatch } from 'react-redux'

export function useExample() {
    const dispatch = useDispatch()

    /* value 감소 */
    const onDecreaseValue = () => {
        dispatch(decrease({}))
    }

    /* value 증가 */
    const onIncreaseValue = () => {
        dispatch(increase({}))
    }

    return {
        events: {
            onDecreaseValue,
            onIncreaseValue
        }
    }
}
