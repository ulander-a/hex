const calcHex = (center, size, i) => {
    const angleDeg = 60 * i - 30
    const angleRad = Math.PI / 180 * angleDeg
    const x = center.x + size * Math.cos(angleRad)
    const y = center.y + size * Math.sin(angleRad)
    return point(x, y)
}

const hexToPixel = (hex, size = 20) => {
    const hexOrigin = {x: 300, y: 300}
    const x = size * (Math.sqrt(3) * hex.c + Math.sqrt(3) / 2 * hex.r) + hexOrigin.x
    const y = size * (3. / 2 * hex.r) + hexOrigin.y
    return point(x, y)
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
    for (let r = 0; r <= 4; r++) {
        for (let c = 0; c <= 4; c++) {
            let center = hexToPixel(hex(r, c))
            drawHex(canvas, center)
            drawCoordinates(canvas, center, hex(c, r))
        }
    }
}

const drawCoordinates = (canvas, center, hex) => {
    const ctx = canvas.getContext('2d')
    ctx.fillText(hex.c, center.x-10, center.y)
    ctx.fillText(hex.r, center.x+5, center.y)
}

window.onload = () => {
    const canvas = document.getElementById('hex-container')
    // return drawHex(canvas, { x: 50, y: 50 })
    return drawHexes(canvas)
}