import { SnakeConditionEnum } from '@/redux/snake/snake.enum'
import { changeDirection, moveSnake, resetGame, startGame } from '@/redux/snake/snake.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useSnake(condition: SnakeConditionEnum) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetGame({}))
        document.addEventListener('keydown', (e) => {
            dispatch(startGame({ key: e.key }))
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (condition === SnakeConditionEnum.RUNNING || condition === SnakeConditionEnum.EAT) {
            document.addEventListener('keydown', (e) => {
                dispatch(startGame({ key: e.key }))

                dispatch(changeDirection({ key: e.key }))
            })

            const move = setInterval(() => {
                dispatch(moveSnake({}))
            }, 150)

            return () => clearInterval(move)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [condition])

    const onClickButton = () => {
        dispatch(resetGame({}))
    }

    return {
        events: {
            onClickButton
        }
    }
}
