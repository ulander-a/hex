const rowHTML = length => {
    // skapar en array med x antal hexagoner
    return Array(length).fill(
        `<div class="hex">
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
        </div>`
    ).join('')
}

const calcRows = amnt => {


    const rows = [...Array(amnt)].map(() => {
        return `<div class="hex-row">${rowHTML(4)}</div>`
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
    const rows = calcRows(1)
    render(rows, container)
}