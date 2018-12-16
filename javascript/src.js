function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}


const drawHexGrid = () => {
	const grid = new HT.Grid(800, 600);
	const canvas = document.getElementById("hex-container");
	const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 800, 600);

  canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    grid.GetHexAt(point(mousePos.x, mousePos.y))
  }, false);
  
  return grid.Hexes.map((v) => {
    renderHex(v, ctx)
  })
}

const getHexGridWH = () => {
	// calcHex();
  return drawHexGrid();
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