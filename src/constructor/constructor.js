const ErrorLib = require('../utils/errorlib')

class CanvasLite {
	constructor(id) {
		let targetCanvas;
		// Getting target canvas
		targetCanvas = this.targetCanvas = document.getElementById(id);
		if (!targetCanvas) {
			throw Error(ErrorLib.elementNotFound(id));
		} else if (!targetCanvas.getContext) {
			throw Error(ErrorLib.notACanvas());
		}
	}
}

// Exporting Library
module.exports = CanvasLite;