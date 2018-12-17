function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}


const drawHexGrid = canvas => {
  const grid = new HT.Grid(800, 600);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 800, 600);

  grid.Hexes.map((v) => {
    renderHex(v, ctx)
  })

  return grid
}

// const getHexGridWH = canvas => {
//   // calcHex();
//   return drawHexGrid();
// }

const listener = (canvas, grid, e) => {
    const mousePos = getMousePos(canvas, e);
    return grid.GetHexAt(point(mousePos.x, mousePos.y))
}

// const addHexToCanvasAndDraw = (x, y) => {
// 	HT.Hexagon.Static.DRAWSTATS = true;
// 	var hex = new HT.Hexagon(null, x, y);

// 	var canvas = document.getElementById("hex-container");
// 	var ctx = canvas.getContext('2d');
// 	ctx.clearRect(0, 0, 800, 600);
// 	hex.draw(ctx);
// }

window.onload = () => {
  const canvas = document.getElementById('hex-container')
  const coordinates = document.getElementById('coordinates')
  const grid = drawHexGrid(canvas)
  canvas.addEventListener('click', (e) => {
    coordinates.innerHTML = listener(canvas, grid, e)
  })
}