class Hexagon {
    constructor() {
        this.left = '<div class="left"></div>'
        this.center = '<div class="center"></div>'
        this.right = '<div class="right"></div>'
    }
}

const createRow = length => {
    let row = {
        hexes: []
    }

    Array(length).fill().map(() => {
        const hex = new Hexagon
        row.hexes.push(hex)
    })

    return row
}

const calcRows = amnt => {
    let rows = []

    if (amnt > 4) {
        let currentLength = 4

        // TODO: Change to something more "functional"
        while (amnt - currentLength > currentLength) {
            const newRow = createRow(currentLength)
            rows.push(newRow)
            currentLength = newRow.hexes.length + 1
        }
    } else {
        rows.push(createRow(amnt))
    }
    return rows
}

const nugs = (hex) => {
    const hexHTML =  `<div class="hex">${hex.left}${hex.center}${hex.right}</div>`
    console.log(hexHTML)
    return hexHTML
}

const render = (container, rows) => {

    return rows.map(row => {
        let hexes = row.hexes.map((hex) => {nugs(hex)})
        console.log(hexes)
        container.innerHTML =
            `<div class="hex row">${hexes}</div>`
        // row.hexes.map(hex => {
        //     rowHTML.insertAdjacentHTML(
        //         'beforeend',
        //         '<p>AAAAAAAAAA</p>'
        //     )
        // })
    })
}

window.onload = () => {
    const container = document.getElementById('hex-container')
    const rows = calcRows(20)
    render(container, rows)
}
