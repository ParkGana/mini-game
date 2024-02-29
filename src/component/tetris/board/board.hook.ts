import { BlockType } from '@/redux/tetris/tetris.type'
import { useEffect, useState } from 'react'

export function useBoard(block: BlockType[], store: BlockType[]) {
    const [board, setBoard] = useState<BlockType[]>([])

    useEffect(() => {
        setBoard([])

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                let item: BlockType = { color: '#000000', x: j, y: i }

                if (block.filter((item) => item.x === j && item.y === i).length > 0) {
                    item = block.filter((item) => item.x === j && item.y === i)[0]
                } else if (store.filter((item) => item.x === j && item.y === i).length > 0) {
                    item = store.filter((item) => item.x === j && item.y === i)[0]
                }

                setBoard((prevState) => {
                    return [...prevState, item]
                })
            }
        }
    }, [block, store])

    return {
        datas: {
            board
        }
    }
}
