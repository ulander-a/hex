class Hexagon {
    constructor() {
        this.left = '<div class="left"></div>'
        this.center = '<div class="center"></div>'
        this.right = '<div class="right"></div>'
    }
}

const createHex = () => {
    
}

const createRows = length => {

}

const calcRows = amnt => {
    amnt.length > 4 
}

const renderHexes = (container, amnt) => {
    // first row up to 4
    // second row
    // if second row == first row +1 create another row
    // repeat until latest row +1 != previous row, then just render remaining hexes

    if (amnt.length > 4) {
        // create new row 
        // if amnt.length > new row.length - create new row
        // if amnt.length > new row.length - create new row 
    } else {
        // just create a row of what we have
    }

    // render rows

    return amnt.map(() => {
        const hexagon = new Hexagon
        container.insertAdjacentHTML(
            'beforeend',
            `<div class="hex">
                ${hexagon.left}
                ${hexagon.center}
                ${hexagon.right}
            </div>`
        )
    })
}

window.onload = () => {
    const container = document.getElementById('hex-container')
    console.log(container)
    renderHexes(container, [...Array(4)])
}
