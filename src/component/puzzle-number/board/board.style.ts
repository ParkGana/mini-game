import styled from 'styled-components'

export namespace BoardStyle {
    export const Container = styled.div`
        position: relative;
        display: grid;
        grid-template-rows: repeat(4, 70px);
        grid-template-columns: repeat(4, 70px);
        gap: 5px;
    `
}
