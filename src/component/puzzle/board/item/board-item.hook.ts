import { dragPiece, dropPiece } from '@/redux/puzzle/puzzle.slice'
import { DragEvent } from 'react'
import { useDispatch } from 'react-redux'

export function useBoardItem() {
    const dispatch = useDispatch()

    /* drag 이벤트 */
    const onDragItem = (e: DragEvent<HTMLImageElement>) => {
        dispatch(dragPiece({ id: e.currentTarget.id, src: e.currentTarget.src, dest: e.currentTarget.src }))
    }

    /* drop 이벤트 */
    const onDropItem = (e: DragEvent<HTMLImageElement>) => {
        dispatch(dropPiece({ id: e.currentTarget.id, src: e.currentTarget.src, dest: e.currentTarget.src }))
    }

    return {
        events: {
            onDragItem,
            onDropItem
        }
    }
}
