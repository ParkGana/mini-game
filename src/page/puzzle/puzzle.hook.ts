import { useState } from 'react'

export function usePuzzle() {
    const [level, setLevel] = useState<string>('초급')

    const onSelectLevel = (value: string) => {
        setLevel(value)
    }

    const onClickButton = () => {}

    return {
        states: {
            level
        },
        events: {
            onSelectLevel,
            onClickButton
        }
    }
}
