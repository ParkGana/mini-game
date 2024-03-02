import { NumberType } from '@/redux/puzzle/puzzle-number.type'
import { useEffect, useState } from 'react'

export function useBoard(number: NumberType[]) {
    const [board, setBoard] = useState<NumberType[]>([])

    useEffect(() => {
        setBoard([])

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let item: NumberType = { x: j, y: i, value: 0 }

                if (number.filter((item) => item.x === j && item.y === i).length > 0) {
                    item = number.filter((item) => item.x === j && item.y === i)[0]
                }

                setBoard((prevState) => {
                    return [...prevState, item]
                })
            }
        }
    }, [number])

    return {
        datas: {
            board
        }
    }
}
