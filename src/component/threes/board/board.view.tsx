import { BoardStyle } from './board.style'
import { BoardItem } from './item/board-item.view'
import { Result } from '../../common/result/result.view'
import { useSelector } from 'react-redux'
import { ThreesConditionEnum } from '@/redux/threes/threes.enum'

export function Board() {
    const threes = useSelector((state: any) => state.threes)

    return (
        <BoardStyle.Container>
            {threes.value.map((item: number, index: number) => (
                <BoardItem key={index} value={item} />
            ))}

            {threes.condition === ThreesConditionEnum.SUCCESS && <Result message={'SUCCESS!'} />}
            {threes.condition === ThreesConditionEnum.FAIL && <Result message={'FAIL!'} />}
        </BoardStyle.Container>
    )
}
