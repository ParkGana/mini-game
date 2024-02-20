import { FormatInfoData } from '@/src/tool/minesweeper.tool'
import { useInfoTime } from './info-time.hook'
import { InfoStyle } from './info.style'

export function InfoTime() {
    const { datas } = useInfoTime()

    return (
        <InfoStyle.Container>
            <InfoStyle.Title>time</InfoStyle.Title>
            <InfoStyle.Data>{FormatInfoData(datas.second)}</InfoStyle.Data>
        </InfoStyle.Container>
    )
}
