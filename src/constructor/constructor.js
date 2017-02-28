const errors = require('../utils/error'),
  defaults = require('../utils/defaults'),
  lib = require('../utils/lib'),
  getCanvas = function (id) {
    let canvas = document.getElementById(id)
    // sanity check
    if (!canvas) {
      errors.elementNotFound(id)
    } else if (!canvas.getContext) {
      errors.notACanvas()
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
    width = this.width = width || defaults.canvasW
    height = this.height = height || defaults.canvasH
    // Applying height and width
    lib.applyAttr(targetCanvas, {width, height});
	}
}

// Exporting Library
module.exports = CanvasLite;