export function useLevel(selectCallback: (value: string) => void) {
    const onSelectLevel = (value: string) => {
        selectCallback(value)
    }

    return {
        events: {
            onSelectLevel
        }
    }
}
