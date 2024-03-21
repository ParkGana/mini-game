import styled from 'styled-components'

export namespace MinesweeperStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        gap: 20px;
    `

    export const SafetyContainer = styled.div`
        display: grid;
        gap: 20px;
    `

    export const LevelContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 100px);
        gap: 20px;
    `

    export const DataContainer = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, fit-content(100px));
        justify-content: space-between;
    `
}
