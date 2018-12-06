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

// const renderHexes = (container, amnt) => {
//     return amnt.map(() => {
//         const hexagon = new Hexagon
//         container.insertAdjacentHTML(
//             'beforeend',
//             `<div class="hex">
//                 ${hexagon.left}
//                 ${hexagon.center}
//                 ${hexagon.right}
//             </div>`
//         )
//     })
// }

window.onload = () => {
    const container = document.getElementById('hex-container')
    // renderHexes(container, [...Array(30)])
    console.log(calcRows(20))
}
