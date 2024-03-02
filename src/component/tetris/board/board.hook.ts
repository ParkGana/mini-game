import { BlockType } from '@/redux/tetris/tetris.type'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function useBoard() {
    const tetris = useSelector((state: any) => state.tetris)

    const [board, setBoard] = useState<BlockType[]>([])

    useEffect(() => {
        setBoard([])

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                let item: BlockType = { color: '#000000', x: j, y: i }

                if (tetris.block.filter((item: BlockType) => item.x === j && item.y === i).length > 0) {
                    item = tetris.block.filter((item: BlockType) => item.x === j && item.y === i)[0]
                } else if (tetris.store.filter((item: BlockType) => item.x === j && item.y === i).length > 0) {
                    item = tetris.store.filter((item: BlockType) => item.x === j && item.y === i)[0]
                }

                setBoard((prevState) => {
                    return [...prevState, item]
                })
            }
        }
    }, [tetris.block, tetris.store])

    return {
        datas: {
            board
        }
    }
}
