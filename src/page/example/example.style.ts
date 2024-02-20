import styled from 'styled-components'

export namespace ExampleStyle {
    export const Container = styled.div`
        display: grid;
        grid-template-columns: 30px 50px 30px;
        align-items: center;
        justify-items: center;
        gap: 10px;
        padding: 20px;
    `

    export const Text = styled.div``

    export const Button = styled.div`
        width: 30px;
        height: 30px;
        display: grid;
        align-items: center;
        justify-items: center;
        font-size: 20px;
        font-weight: 700;
        border: 2px solid #000000;
        cursor: pointer;
    `
}
