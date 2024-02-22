import { MinesweeperConditionEnum } from '@/redux/minesweeper/minesweeper.enum'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function useInfoTime() {
    const minesweeper = useSelector((state: any) => state.minesweeper)

    const [second, setSecond] = useState(0)

    useEffect(() => {
        // 게임을 시작하지 않은 경우
        if (minesweeper.condition === MinesweeperConditionEnum.STANDBY) {
            setSecond(0)
        }

        // 게임이 진행 중인 경우
        if (minesweeper.condition === MinesweeperConditionEnum.RUNNING && second < 999) {
            const timer = setInterval(() => {
                setSecond(second + 1)
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [minesweeper.condition, second])

    return {
        datas: {
            second
        }
    }
}
