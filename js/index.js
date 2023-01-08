import Screen from './screen.js';
import { Point, Polygon } from './geometry.js';
import IntersectionTester from './pointIntersection.js';

function pointInPolygon(point, polygon) {
	const n = polygon.length;
	const [x, y] = point;
	let intersections = 0;

	for (var i = 0; i < n - 1; ++i) {
		const [x1, y1] = this.polygon[i];
		const [x2, y2] = this.polygon[i + 1];

		const isInRange = y < y1 != y < y2;
		if(!isInRange) continue;

		const intersectionPointX = (x2 - x1) * (y - y1) / (y2 - y1) + x1
		if (x < intersectionPointX) {
			intersections++;
		}
	}

	return intersections % 2 === 0;
}

class PointInPolyVisual {
	constructor() {
		this.screen = new Screen();
		this.point = new Point(150, 250);
		this.polygon = new Polygon(
			[[150, 50], [400, 300], [150, 350], [250, 450], [200, 300], [10, 200], [150, 50]].reverse()
		);
		this.xControl = document.querySelector('#xrange');
		this.yControl = document.querySelector('#yrange');
		this.controlsWrapper = document.querySelector('#sliderControls');
		this.intersectionTester = this.checkIntersections()
		this.intersects = this.intersectionTester.intersects
		this.init()
	}

	init() {
		this.visualise()
		this.controlsWrapper.addEventListener('input', this.handleInput().bind(this))
	}

	handleInput() {
		return function () {
			this.point = new Point(
				this.xControl.value,
				this.yControl.value
			);
			this.intersectionTester = this.checkIntersections();
			this.visualise(true)
		}
	}

	visualise(clear) {
		if (clear) this.screen.clear()
		this.screen.drawRay(this.point)
		this.screen.drawPolygon(this.polygon)
		this.screen.drawPoint(this.point, this.intersectionTester.intersects ? 'blue' : 'red')
		this.intersectionTester.intersectionPoints.forEach((point) => {
			this.screen.drawPoint(point, 'green')
		})
	}

	checkIntersections() {
		return new IntersectionTester(this.point, this.polygon.rawPoints)
	}
}

new PointInPolyVisual()

