import {Point} from './geometry.js'

export default class {
    constructor(point, polygon){
        this.point = point;
        this.polygon = polygon;
        this.intersectionPoints = [];
				this.intersects = false;
				this.checkIfPointInPolygon();
    }

    checkIfPointInPolygon() {
		this.intersectionPoints = [];
		const polgyonSize = this.polygon.length;
		const x = this.point.x;
		const y = this.point.y;
		
		let	intersections = 0;
	
		for (var i = 0; i < polgyonSize - 1; ++i) {
			const [x1, y1] = this.polygon[i];
			const [x2, y2] = this.polygon[i + 1];
	
			const isInRange = y < y1 != y < y2;
			if(!isInRange) continue;

			const intersectionPointX = (x2 - x1) * (y - y1) / (y2 - y1) + x1
			if (x < intersectionPointX) {
				console.log((x2 - x1) * (y - y1) / (y2 - y1))
				console.log(x1)
				console.log((x2 - x1) * (y - y1) / (y2 - y1) + x1)
				console.log(x)
				intersections++;
				this.intersectionPoints.push(new Point(intersectionPointX, y));
			}
		}
		
		this.intersects = intersections % 2 === 0;
	}
}