import * as PIXI from 'pixi.js'

const app = new PIXI.Application({ transparent: true })
const graphics = new PIXI.Graphics()
document.body.appendChild(app.view)
// set a line style of 1px wide and color #999

function render(grid, highlight = false, highlightCoords = {}) {
    graphics.clear()

    // render hexes
    grid.forEach(hex => {
        graphics.lineStyle(5, 0x999999)

        if (highlight) {
            if (hex.x === highlightCoords.x && hex.y === highlightCoords.y) {
                graphics.beginFill(333333)
            } else {
                graphics.endFill()
            }
        }

        const point = hex.toPoint()
        // add the hex's position to each of its corner points
        const corners = hex.corners().map(corner => corner.add(point))
        // separate the first from the other corners
        const [firstCorner, ...otherCorners] = corners
        // move the "pen" to the first corner
        graphics.moveTo(firstCorner.x, firstCorner.y)
        // draw lines to the other corners
        otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y))
        // finish at the first corner
        graphics.lineTo(firstCorner.x, firstCorner.y)

        app.stage.addChild(graphics)
    })
}

export { render }