const rowHTML = length => {
    const test = [...Array(length)].map((value, index) => {
        return `
        <div class="hex ${index % 2 == 0 ? 'even' : ''}">
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
        </div>`
    })
    return test.join('')
}

const calcRows = amnt => {
    let rowLength = 3

    const rows = [...Array(amnt)].map(() => {
        // create rows with varying length from top to bottom
        // rowLenght = 3
        // while rowLength < amnt create new row and return new rowLength
        while (rowLength < amnt) {
            const row = `<div class="hex-row">${rowHTML(rowLength)}</div>`
            rowLength++
            console.log(rowLength)
            return row
        }
    })

    return rows
}

const render = (arr, container) => {
    return arr.map(element => {
        container.insertAdjacentHTML(
            'beforeend',
            element
        )
    })
}

window.onload = () => {
    const container = document.getElementById('hex-container')
    const rows = calcRows(6)
    render(rows, container)
}