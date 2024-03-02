import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import { useBoard } from './board.hook'
import { useSelector } from 'react-redux'
import { TetrisConditionEnum } from '@/redux/tetris/tetris.enum'
import { Result } from '../../common/result/result.view'

export function Board() {
    const tetris = useSelector((state: any) => state.tetris)

    const { datas } = useBoard()

    return (
        <BoardStyle.Container>
            {datas.board.map((item, index) => (
                <BoardItem key={index} color={item.color} />
            ))}

            {tetris.condition === TetrisConditionEnum.FINISH && <Result message={'FAIL!'} />}
        </BoardStyle.Container>
    )
}
