var HT = HT || {};

const point = (x, y) => {
	return { X: x, Y: y }
};

const rectangle = (x, y, width, height) => {
	return {
		X: x,
		Y: y,
		Width: width,
		Height: height
	}
};

const line = (x1, y1, x2, y2) => {
	return {
		X1: x1,
		Y1: y1,
		X2: x2,
		Y2: y2
	}
}

/**
 * A Hexagon is a 6 sided polygon, our hexes don't have to be symmetrical, i.e. ratio of width to height could be 4 to 3
 * @constructor
 */
HT.Hexagon = function (id, x, y) {
	const x1 = (hexDimensions.WIDTH - hexDimensions.SIDE) / 2;
	const y1 = (hexDimensions.HEIGHT / 2);

	return {
		Points: [
			point(x1 + x, y),
			point(x1 + hexDimensions.SIDE + x, y),
			point(hexDimensions.WIDTH + x, y1 + y),
			point(x1 + hexDimensions.SIDE + x, hexDimensions.HEIGHT + y),
			point(x1 + x, hexDimensions.HEIGHT + y),
			point(x, y1 + y)
		],
		Id: id,
		x: x,
		y: y,
		x1: x1,
		y1: y1,
		TopLeftPoint: point(x, y),
		BottomRightPoint: point(x + hexDimensions.WIDTH, y + hexDimensions.HEIGHT),
		MidPoint: point(x + (hexDimensions.WIDTH / 2), y + (hexDimensions.HEIGHT / 2)),
		P1: point(x + x1, y + y1),
		selected: false
	}
};

/**
 * draws this Hexagon to the canvas
 * @this {HT.Hexagon}
 */
const renderHex = (hex, ctx) => {

	if (!hex.selected)
		ctx.strokeStyle = "grey";
	else
		ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(hex.Points[0].X, hex.Points[0].Y);
	for (var i = 1; i < hex.Points.length; i++) {
		var p = hex.Points[i];
		ctx.lineTo(p.X, p.Y);
	}
	ctx.closePath();
	ctx.stroke();

	if (hex.Id) {
		//draw text for debugging
		ctx.fillStyle = "black"
		ctx.font = "bolder 8pt Trebuchet MS,Tahoma,Verdana,Arial,sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = 'middle';
		//var textWidth = ctx.measureText(hex.Planet.BoundingHex.Id);
		ctx.fillText(hex.Id, hex.MidPoint.X, hex.MidPoint.Y);
	}

	if (hex.PathCoOrdX !== null && hex.PathCoOrdY !== null && typeof (hex.PathCoOrdX) != "undefined" && typeof (hex.PathCoOrdY) != "undefined") {
		//draw co-ordinates for debugging
		ctx.fillStyle = "black"
		ctx.font = "bolder 8pt Trebuchet MS,Tahoma,Verdana,Arial,sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = 'middle';
		//var textWidth = ctx.measureText(hex.Planet.BoundingHex.Id);
		ctx.fillText("(" + hex.PathCoOrdX + "," + hex.PathCoOrdY + ")", hex.MidPoint.X, hex.MidPoint.Y + 10);
	}

	if (hexDimensions.DRAWSTATS) {
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		//draw our x1, y1, and z
		ctx.beginPath();
		ctx.moveTo(hex.P1.X, hex.y);
		ctx.lineTo(hex.P1.X, hex.P1.Y);
		ctx.lineTo(hex.x, hex.P1.Y);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle = "black"
		ctx.font = "bolder 8pt Trebuchet MS,Tahoma,Verdana,Arial,sans-serif";
		ctx.textAlign = "left";
		ctx.textBaseline = 'middle';
		//var textWidth = ctx.measureText(hex.Planet.BoundingHex.Id);
		ctx.fillText("z", hex.x + hex.x1 / 2 - 8, hex.y + hex.y1 / 2);
		ctx.fillText("x", hex.x + hex.x1 / 2, hex.P1.Y + 10);
		ctx.fillText("y", hex.P1.X + 2, hex.y + hex.y1 / 2);
		ctx.fillText("z = " + hexDimensions.SIDE, hex.P1.X, hex.P1.Y + hex.y1 + 10);
		ctx.fillText("(" + hex.x1.toFixed(2) + "," + hex.y1.toFixed(2) + ")", hex.P1.X, hex.P1.Y + 10);
	}
};

/**
 * Returns true if the x,y coordinates are inside this hexagon
 * @this {HT.Hexagon}
 * @return {boolean}
 */
HT.Hexagon.prototype.isInBounds = function (x, y) {
	return this.Contains(new HT.Point(x, y));
};


/**
 * Returns true if the point is inside this hexagon, it is a quick contains
 * @this {HT.Hexagon}
 * @param {HT.Point} p the test point
 * @return {boolean}
 */
HT.Hexagon.prototype.isInHexBounds = function (/*Point*/ p) {
	if (this.TopLeftPoint.X < p.X && this.TopLeftPoint.Y < p.Y &&
		p.X < this.BottomRightPoint.X && p.Y < this.BottomRightPoint.Y)
		return true;
	return false;
};

//grabbed from:
//http://www.developingfor.net/c-20/testing-to-see-if-a-point-is-within-a-polygon.html
//and
//http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html#The%20C%20Code
/**
 * Returns true if the point is inside this hexagon, it first uses the quick isInHexBounds contains, then check the boundaries
 * @this {HT.Hexagon}
 * @param {HT.Point} p the test point
 * @return {boolean}
 */
HT.Hexagon.prototype.Contains = function (/*Point*/ p) {
	var isIn = false;
	if (this.isInHexBounds(p)) {
		//turn our absolute point into a relative point for comparing with the polygon's points
		//var pRel = new HT.Point(p.X - this.x, p.Y - this.y);
		var i, j = 0;
		for (i = 0, j = this.Points.length - 1; i < this.Points.length; j = i++) {
			var iP = this.Points[i];
			var jP = this.Points[j];
			if (
				(
					((iP.Y <= p.Y) && (p.Y < jP.Y)) ||
					((jP.Y <= p.Y) && (p.Y < iP.Y))
					//((iP.Y > p.Y) != (jP.Y > p.Y))
				) &&
				(p.X < (jP.X - iP.X) * (p.Y - iP.Y) / (jP.Y - iP.Y) + iP.X)
			) {
				isIn = !isIn;
			}
		}
	}
	return isIn;
};

/**
* Returns absolute distance in pixels from the mid point of this hex to the given point
* Provided by: Ian (Disqus user: boingy)
* @this {HT.Hexagon}
* @param {HT.Point} p the test point
* @return {number} the distance in pixels
*/
HT.Hexagon.prototype.distanceFromMidPoint = function (/*Point*/ p) {
	// Pythagoras' Theorem: Square of hypotenuse = sum of squares of other two sides
	var deltaX = this.MidPoint.X - p.X;
	var deltaY = this.MidPoint.Y - p.Y;

	// squaring so don't need to worry about square-rooting a negative number 
	return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
};

HT.Hexagon.Orientation = {
	Normal: 0,
	Rotated: 1
};

hexDimensions = {
	HEIGHT: 86, 
	WIDTH: 100, 
	SIDE: 50.0, 
	DRAWSTATS: false
};
//hexagons will have 25 unit sides for now


