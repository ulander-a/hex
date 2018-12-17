/**
 * A Grid is the model of the playfield containing hexes
 * @constructor
 */
class Grid {

	constructor(width, height) {
		this.Static = { Letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' };
		this.Hexes = [];
		//setup a dictionary for use later for assigning the X or Y CoOrd (depending on Orientation)
		var HexagonsByXOrYCoOrd = {}; //Dictionary<int, List<Hexagon>>

		var row = 0;
		var y = 0.0;

		// DAS IT MANE
		// this.Hexes = repeat = n => f => x =>
		// 	n === 0 ? x : repeat(n - 1)(f)(f(x))

		while (y + hexDimensions.HEIGHT <= height) {
			var col = 0;
			console.log(y + hexDimensions.HEIGHT)
			var offset = 0.0;
			if (row % 2 == 1) {
				offset = (hexDimensions.WIDTH - hexDimensions.SIDE) / 2 + hexDimensions.SIDE;
				col = 1;
			}

			var x = offset;
			while (x + hexDimensions.WIDTH <= width) {
				var hexId = this.GetHexId(row, col);
				var h = new HT.Hexagon(hexId, x, y);

				var pathCoOrd = col;
				h.PathCoOrdX = col;//the column is the x coordinate of the hex, for the y coordinate we need to get more fancy

				this.Hexes.push(h);

				if (!HexagonsByXOrYCoOrd[pathCoOrd])
					HexagonsByXOrYCoOrd[pathCoOrd] = [];
				HexagonsByXOrYCoOrd[pathCoOrd].push(h);

				col += 2;
				x += hexDimensions.WIDTH + hexDimensions.SIDE;
			}
			row++;
			y += hexDimensions.HEIGHT / 2;
		}

		//finally go through our list of hexagons by their x co-ordinate to assign the y co-ordinate
		for (var coOrd1 in HexagonsByXOrYCoOrd) {
			var hexagonsByXOrY = HexagonsByXOrYCoOrd[coOrd1];
			var coOrd2 = Math.floor(coOrd1 / 2) + (coOrd1 % 2);
			for (var i in hexagonsByXOrY) {
				var h = hexagonsByXOrY[i];//Hexagon
				h.PathCoOrdY = coOrd2++;

			}
		}
	}

	GetHexId(row, col) {
		var letterIndex = row;
		var letters = "";
		while (letterIndex > 25) {
			letters = this.Static.Letters[letterIndex % 26] + letters;
			letterIndex -= 26;
		}

		return this.Static.Letters[letterIndex] + letters + (col + 1);
	};

	GetHexAt(/*Point*/ p) {
		for (var h in this.Hexes) {
			if (this.Hexes[h].isInHexBounds(p)) {
				return this.Hexes[h].Id
			}
		}
	};

	GetHexDistance(/*Hexagon*/ h1, /*Hexagon*/ h2) {
		//a good explanation of this calc can be found here:
		//http://playtechs.blogspot.com/2007/04/hex-grids.html
		var deltaX = h1.PathCoOrdX - h2.PathCoOrdX;
		var deltaY = h1.PathCoOrdY - h2.PathCoOrdY;
		return ((Math.abs(deltaX) + Math.abs(deltaY) + Math.abs(deltaX - deltaY)) / 2);
	};

	/**
	 * Returns a distance between two hexes
	 * @this {HT.Grid}
	 * @return {HT.Hexagon}
	 */
	GetHexById(id) {
		for (var i in this.Hexes) {
			if (this.Hexes[i].Id == id) {
				return this.Hexes[i];
			}
		}
		return null;
	};

	GetNearestHex(/*Point*/ p) {

		var distance;
		var minDistance = Number.MAX_VALUE;
		var hx = null;

		// iterate through each hex in the grid
		for (var h in this.Hexes) {
			distance = this.Hexes[h].distanceFromMidPoint(p);

			if (distance < minDistance) // if this is the nearest thus far
			{
				minDistance = distance;
				hx = this.Hexes[h];
			}
		}

		return hx;
	};
};
