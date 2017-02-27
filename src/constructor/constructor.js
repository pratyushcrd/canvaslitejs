const Errors = require('../utils/errorlib'),
  DefaultLib = require('../utils/defaultslib'),
  getCanvas = function (id) {
    let canvas = document.getElementById(id)
    // sanity check
    if (!canvas) {
      Errors.elementNotFound(id)
    } else if (!canvas.getContext) {
      Errors.notACanvas()
    }
    return canvas
  }

class CanvasLite {
	constructor(id, width, height) {
		let canvas = this,
      targetCanvas
		// Getting target canvas
		targetCanvas = canvas.targetCanvas = getCanvas(id)
    // Storing context
    canvas.canvasContext = targetCanvas.getContext('2d')
    // Getting height-width from user or from defaults
    width = this.width = width || DefaultLib.canvasW
    height = this.height = height || DefaultLib.canvasH
    // Applying height and width
    targetCanvas.setAttribute('width', width)
    targetCanvas.setAttribute('height', height)
	}
}

// Exporting Library
module.exports = CanvasLite;