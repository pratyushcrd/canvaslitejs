const errors = require('../utils/error'),
  defaults = require('../utils/defaults'),
  lib = require('../utils/lib'),
  constants = require('../utils/constants'),
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
	constructor (id, width, height) {
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
// Initializing components
CanvasLite.components = {};
// Library related functions
CanvasLite.registerComponent = function (key, component) {
  let comp = CanvasLite.components
  // Throw error if component already registered
  if (comp[constants.has](key)) {
    errors.alreadyExists(key)
  }
  if (lib.is(component).a('function')) {
    comp[key] = component;
  } else {
    errors.mustBe('function')
  }
}
// Exporting Library
module.exports = CanvasLite;
