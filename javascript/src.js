const rowHTML = length => {
    const test = [...Array(length)].map((v, i) => {
        return `
        <div class="${i % 2 == 0 ? 'hex even' : 'hex'}">
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
        </div>`
    })
    return test.join('')
}

const calcRows = amnt => {
    const arr = [...Array(amnt)].map((v, i) => {
        return i
    })


    // const grid = arr.concat(arr)
    // console.log(grid) 

    // const rows = [...Array(amnt)].map(() => {
    //     while (rowLength < amnt) {
    //         const row = `<div class="hex-row">${rowHTML(rowLength)}</div>`
    //         rowLength++
    //         return row
    //     }
    // })

    // return rows
}

const render = (array, container) => {
    return array.map(element => {
        container.insertAdjacentHTML(
            'beforeend',
            element
        )
    })
}

window.onload = () => {
    const container = document.getElementById('hex-container')
    const rows = calcRows(5)
    // render(rows, container)
}