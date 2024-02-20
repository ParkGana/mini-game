import { useSelector } from 'react-redux'
import { useExample } from './example.hook'
import { ExampleStyle } from './example.style'

export function Example() {
    const { events } = useExample()

    const example = useSelector((state: any) => state.example)

    return (
        <ExampleStyle.Container>
            <ExampleStyle.Button onClick={events.onDecreaseValue}>-</ExampleStyle.Button>
            <ExampleStyle.Text>{example.value}</ExampleStyle.Text>
            <ExampleStyle.Button onClick={events.onIncreaseValue}>+</ExampleStyle.Button>
        </ExampleStyle.Container>
    )
}
