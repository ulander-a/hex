const Honeycomb = require('honeycomb-grid')
import { render } from './canvas'

function test() {
    // 1.  (optionally) create a Hex factory by extending the default:
    const Hex = Honeycomb.extendHex({
        size: 50,           // default: 1
        orientation: 'flat' // default: 'pointy'
    })

    // 2.  create a Grid factory that uses the Hex factory:
    const Grid = Honeycomb.defineGrid(Hex)

    // 3a. create a grid with a "shape" method:
    const grid1 = Grid.rectangle({ width: 5, height: 5 })

    render(grid1)

    document.addEventListener('click', ({ offsetX, offsetY }) => {
        // convert point to hex (coordinates)
        const hexCoordinates = Grid.pointToHex(offsetX, offsetY)
        // get the actual hex from the grid
        console.log(grid1.get(hexCoordinates))
    })
}

export { test }