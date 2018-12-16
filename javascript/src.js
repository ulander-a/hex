const drawHexGrid = () => {
	const grid = new HT.Grid(800, 600);
	const canvas = document.getElementById("hex-container");
	const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 800, 600);
  
  return grid.Hexes.map((v) => {
    renderHex(v, ctx)
  })
}

const getHexGridWH = () => {
	// calcHex();
  drawHexGrid();
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
  getHexGridWH()
}