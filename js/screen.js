export default class Screen {
	constructor() {
		this.canvas = document.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
	}

	drawPolygon(polygon) {
		this.ctx.beginPath();
		const firstPoint = polygon.points[0].toCanvasCoor(this.canvas)
		this.ctx.moveTo(...firstPoint);

		for (let i = 1; i < polygon.size; i++) {
			const nextPoint = polygon.points[i].toCanvasCoor(this.canvas)
			this.ctx.lineTo(...nextPoint)
		}

		this.ctx.closePath();
		this.ctx.stroke();
	}

	drawPoint(point, color="red") {
		this.ctx.beginPath()
		this.ctx.arc(...point.toCanvasCoor(this.canvas), 4, 0, 2 * Math.PI);
		this.ctx.fillStyle = color
		this.ctx.fill();
	}

    drawRay(point){
        this.ctx.beginPath()
        const [x, y] = point.toCanvasCoor(this.canvas)
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + 600, y);
        this.ctx.stroke();
    }

	clear(){
		this.ctx.clearRect(0, 0, 600, 600);
	}
}