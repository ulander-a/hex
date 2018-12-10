const calcRows = (int) => {
    const hexagon = `
        <div class="hex">
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
        </div>
    `
    return [...Array(int)].map(() => {
        return hexagon
    })
}

window.onload = () => {
    const container = document.getElementById('hex-container')
    const rows = calcRows(10)
    return rows.map(row => {
        container.insertAdjacentHTML(
            'beforeend',
            row
        )
    })
}