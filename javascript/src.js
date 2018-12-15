const calcHex = () => {
  const w = 100
  const h = 86

  // formula for calculating hexagon
  const a = -3.0
  const b = (-2.0 * w)
  const c = (Math.pow(w, 2)) + (Math.pow(h, 2))

	const z = (-b - Math.sqrt(Math.pow(b,2)-(4.0*a*c)))/(2.0*a);

  // return HT.Hexagon.Static = {
  //   WIDTH: w,
  //   HEIGHT: h,
  //   SIDE: z
  // }

  HT.Hexagon.Static.WIDTH = w;
	HT.Hexagon.Static.HEIGHT = h;
  HT.Hexagon.Static.SIDE = z;
}

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
	calcHex();
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