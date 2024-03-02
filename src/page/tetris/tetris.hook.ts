import { TetrisConditionEnum } from '@/redux/tetris/tetris.enum'
import { moveToDown, moveToLeft, moveToRight, rotateBlock, resetGame, moveToDirect } from '@/redux/tetris/tetris.slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useTetris() {
    const dispatch = useDispatch()

    const tetris = useSelector((state: any) => state.tetris)

    useEffect(() => {
        dispatch(resetGame({}))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (tetris.condition === TetrisConditionEnum.RUNNING) {
            document.addEventListener('keydown', (e) => {
                // 위쪽 방향키 눌렀을 경우 블록 회전
                if (e.key == 'ArrowUp') {
                    dispatch(rotateBlock({}))
                }
                // 아래쪽 방향키 눌렀을 경우 아래쪽으로 한 칸 이동
                else if (e.key == 'ArrowDown') {
                    dispatch(moveToDown({}))
                }
                // 왼쪽 방향키 눌렀을 경우 왼족으로 한 칸 이동
                else if (e.key == 'ArrowLeft') {
                    dispatch(moveToLeft({}))
                }
                // 오른쪽 방향키 눌렀을 경우 오른쪽으로 한 칸 이동
                else if (e.key == 'ArrowRight') {
                    dispatch(moveToRight({}))
                }
                // 엔터키 눌렀을 경우 아래로 바로 이동
                else if (e.key == 'Enter') {
                    dispatch(moveToDirect({}))
                }
            })

            const down = setInterval(() => {
                dispatch(moveToDown({}))
            }, 500)

            return () => clearInterval(down)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tetris.condition])

    const onClickButton = () => {
        dispatch(resetGame({}))
    }

    return {
        events: {
            onClickButton
        }
    }
}
