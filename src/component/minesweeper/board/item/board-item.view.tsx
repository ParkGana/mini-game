import { BoardType } from '@/redux/minesweeper/minesweeper.type'
import { BoardItemStyle } from './board-item.style'
import { useBoardItem } from './board-item.hook'
import { MinesweeperBoardMarkEnum, MinesweeperBoardViewEnum } from '@/redux/minesweeper/minesweeper.enum'
import { Image } from '@/src/component/common/image/image.view'

export function BoardItem({ data }: { data: BoardType }) {
    const { events } = useBoardItem()

    return (
        <BoardItemStyle.Container
            isOpen={data.isOpen && data.view !== MinesweeperBoardViewEnum.MINE}
            onClick={() => events.onClickArea(data.idx, 'L')}
            onAuxClick={() => events.onClickArea(data.idx, 'R')}
        >
            {data.isOpen && data.view !== MinesweeperBoardViewEnum.EMPTY && (
                <Image src={`/icons/minesweeper/view-${data.view.toLowerCase()}.png`} alt="icon" />
            )}

            {data.mark !== MinesweeperBoardMarkEnum.EMPTY && (
                <Image src={`/icons/minesweeper/mark-${data.mark.toLowerCase()}.png`} alt="icon" />
            )}
        </BoardItemStyle.Container>
    )
}
