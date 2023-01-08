export class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toCanvasCoor(canvas) {
		const canvasHeight = canvas.height
		const cartesianY = canvasHeight - this.y;
		return [this.x, cartesianY]
	}

	get array(){
		return [this.x, this.y]
	}
}

export class Polygon {
	constructor(points) {
		this.rawPoints = points;
		this.points = this.generatePoints(points);
		this.size = points.length;
		this.lastIndex = this.size - 1;
	}

	generatePoints(points) {
		return points.map(point => new Point(point[0], point[1]))
	}
}