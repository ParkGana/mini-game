import { FormatInfoData } from '@/src/tool/minesweeper.tool'
import { InfoStyle } from './info.style'

export function InfoMine({ mine }: { mine: number }) {
    return (
        <InfoStyle.Container>
            <InfoStyle.Title>mine</InfoStyle.Title>
            <InfoStyle.Data>{FormatInfoData(mine)}</InfoStyle.Data>
        </InfoStyle.Container>
    )
}
