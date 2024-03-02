export const RandomNumber = (value: number[]) => {
    let randomNum = Math.floor(Math.random() * 16)

    while (value[randomNum] !== 0) {
        randomNum = Math.floor(Math.random() * 16)
    }

    return randomNum
}
