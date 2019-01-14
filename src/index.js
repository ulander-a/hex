import './style/style.css'
const Honeycomb = require('honeycomb-grid')

// 1.  (optionally) create a Hex factory by extending the default:
const Hex = Honeycomb.extendHex({
  size: 30,           // default: 1
  orientation: 'flat' // default: 'pointy'
})

// 2.  create a Grid factory that uses the Hex factory:
const Grid = Honeycomb.defineGrid(Hex)

// 3a. create a grid with a "shape" method:
const grid1 = Grid.rectangle({ width: 4, height: 4 })
// [
//    { x: 0, y: 0 },
//    { x: 0, y: 1 },
//    { x: 0, y: 2 },
//    …
// ]
