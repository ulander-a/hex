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
    const rows = calcRows(5)
    render(rows, container)
}