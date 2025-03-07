import { useSelector } from 'react-redux'
import { BoardItemStyle } from './board-item.style'
import { useBoardItem } from './board-item.hook'
import { PuzzleConditionEnum, PuzzleLevelEnum } from '@/redux/puzzle/puzzle.enum'
import { PuzzleData } from '@/redux/puzzle/puzzle.data'

export function BoardItem({ order }: { order: number }) {
    const puzzle = useSelector((state: any) => state.puzzle)

    const { events } = useBoardItem()

    return (
        <BoardItemStyle.Container level={puzzle.level}>
            {puzzle.condition !== PuzzleConditionEnum.STANDBY && (
                <BoardItemStyle.Image
                    id={`${puzzle.resource.image}-${order}`}
                    className={'puzzle-piece'}
                    src={PuzzleData[puzzle.resource.image - 1][`${puzzle.level as PuzzleLevelEnum}`][order - 1]}
                    onDragStart={(e) => events.onDragItem(e)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => events.onDropItem(e)}
                    alt="image"
                />
            )}
        </BoardItemStyle.Container>
    )
}
