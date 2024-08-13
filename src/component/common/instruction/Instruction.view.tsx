import { InstructionStyle } from './instruction.style'

export function Instruction({ message }: { message: string }) {
    return (
        <InstructionStyle.Background>
            <InstructionStyle.Container>
                <InstructionStyle.Text>{message}</InstructionStyle.Text>
            </InstructionStyle.Container>
        </InstructionStyle.Background>
    )
}
