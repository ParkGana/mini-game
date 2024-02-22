import { useEffect, useRef, useState } from 'react'

export function useCategory() {
    const ref = useRef<any>(null)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside)

        return () => {
            document.removeEventListener('mousedown', onClickOutside)
        }
    }, [ref])

    /* 외부 영역 클릭 시 category 창 닫기 */
    const onClickOutside = (e: any): void => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }

    /* category 창 열고 닫기 */
    const onToggleCategory = () => {
        setIsOpen(!isOpen)
    }

    return {
        states: {
            isOpen
        },
        refs: {
            ref
        },
        events: {
            onToggleCategory
        }
    }
}
