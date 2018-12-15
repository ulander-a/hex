const calcHexCornerCoord = (center, size, i) => {
    const angleDeg = 60  * i - 30
    const angleRad = Math.PI / 180 * angleDeg
    const x = center.x + size * Math.cos(angleRad)
    const y = center.y + size * Math.sin(angleRad)
    return point(x, y)
}

const point = (x, y) => {
    return { x: x, y: y }
}

const drawHex = (canvasID, center) => {
    for(let i = 0; i <= 5; i++) {
        let start = calcHexCornerCoord(center, 20, i)
        let end = calcHexCornerCoord(center, 20, i+1)
        drawLine(canvasID, {x: start.x, y: start.y}, {x: end.x, y: end.y})
    }
}

const drawLine = (canvasID, start, end) => {
    const ctx = canvasID.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
    ctx.closePath()
}

window.onload = () => {
    const canvasID = document.getElementById('hex-container')
    drawHex(canvasID, {x: 50, y: 50})
}