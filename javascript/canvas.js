const calcHex = (center, size, i) => {
    const angleDeg = 60 * i - 30
    const angleRad = Math.PI / 180 * angleDeg
    const x = center.x + size * Math.cos(angleRad)
    const y = center.y + size * Math.sin(angleRad)
    return point(x, y)
}

const point = (x, y) => {
    return { x: x, y: y }
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

window.onload = () => {
    const canvas = document.getElementById('hex-container')
    return drawHex(canvas, { x: 50, y: 50 })
}