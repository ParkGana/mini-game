import { ThreesConditionEnum } from '@/redux/threes/threes.enum'
import { moveToDown, moveToLeft, moveToRight, moveToUp, resetGame } from '@/redux/threes/threes.slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useThrees() {
    const dispatch = useDispatch()

    const threes = useSelector((state: any) => state.threes)

    useEffect(() => {
        dispatch(resetGame({}))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (threes.condition === ThreesConditionEnum.RUNNING) {
            document.addEventListener('keydown', (e) => {
                // 위쪽 방향키 눌렀을 경우
                if (e.key == 'ArrowUp') {
                    dispatch(moveToUp({}))
                }
                // 아래쪽 방향키 눌렀을 경우
                else if (e.key == 'ArrowDown') {
                    dispatch(moveToDown({}))
                }
                // 왼쪽 방향키 눌렀을 경우
                else if (e.key == 'ArrowLeft') {
                    dispatch(moveToLeft({}))
                }
                // 오른쪽 방향키 눌렀을 경우
                else if (e.key == 'ArrowRight') {
                    dispatch(moveToRight({}))
                }
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [threes.condition])

    const onClickButton = () => {
        dispatch(resetGame({}))
    }

    return {
        events: {
            onClickButton
        }
    }
}
