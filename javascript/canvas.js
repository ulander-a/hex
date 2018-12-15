const calcHex = (center, size, i) => {
    const angleDeg = 60 * i
    const angleRad = Math.PI / 180 * angleDeg
    const x = center.x + size * Math.cos(angleRad)
    const y = center.y + size * Math.sin(angleRad)
    return point(x, y)
}

const hexToPixel = (hex, size = 20) => {
    const hexOrigin = { x: 30, y: 30 }
    const x = size * (3. / 2 * hex.c) + hexOrigin.x
    const y = size * (Math.sqrt(3) / 2 * hex.c + Math.sqrt(3) * hex.r) + hexOrigin.y
    return point(x, y)
}

const getHexParameters = size => {
    const height = size * 2
    const width = Math.sqrt(3) / 2 * height
    const vertDist = height * 3 / 4
    const horizDist = width
    return { width, height, vertDist, horizDist }
}

const point = (x, y) => {
    return { x: x, y: y }
}

const hex = (r, c) => {
    return { r: r, c: c }
}

const drawHex = (canvas, center) => {
    return [...Array(6)].map((v, i) => {
        const start = calcHex(center, 20, i)
        const end = calcHex(center, 20, i + 1)
        drawLine(
            canvas,
            { x: start.x, y: start.y },
            { x: end.x, y: end.y }
        )
    })
}

const drawLine = (canvas, start, end) => {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
    ctx.closePath()
}

const drawHexes = canvas => {
    const canvasSize = { w: 800, h: 600 }
    let hexes = []
    let row = 0
    let y = 0.0

    while (y + 20 <= canvasSize.height) {
        let col = 0
        let offset = 0.0
        if (row % 2 == 1) {
            offset =
        }
    }

    // const hexParameters = getHexParameters(20)
    // return [...Array(10)].map((v, r) => {
    //     [...Array(10)].map((v, c) => {
    //         const center = hexToPixel(hex(r, c))
    //         drawHex(canvas, center)
    //         drawCoordinates(canvas, center, hex(r, c))
    //     })
    // })
}

const drawCoordinates = (canvas, center, hex) => {
    const ctx = canvas.getContext('2d')
    ctx.fillText(hex.c, center.x - 10, center.y)
    ctx.fillText(':', center.x, center.y)
    ctx.fillText(hex.r, center.x + 5, center.y)
}

window.onload = () => {
    const canvas = document.getElementById('hex-container')
    return drawHexes(canvas)
}