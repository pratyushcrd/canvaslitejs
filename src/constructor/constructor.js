// Variables declaration
let RootGroup,
  cProto;

// Constants definition
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
  },
  registerComponentSanity = function (key, component, instanceMethod) {
    let comp = CanvasLite.components
    // Throw error if component already registered
    if (!key) {
      errors.notDefined('key')
    }
    if (instanceMethod && cProto[constants.has](key)) {
      errors.alreadyExists('instance method', key)
    }
    if (!lib.is(component).a('function')) {
      errors.mustBe('component', 'function')
    }
    // Checking if Constructor has same component
    if (comp[constants.has](key)) {
      errors.alreadyExists('component', key)
    }
  }
/**
* Class definition for the constructor
**/
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
    // Making a root group on the instance
    this.root = new RootGroup(this)
	}
  /**
  * Function to command all elements 
  * to draw itself
  **/
  paint () {
    this.root.__paint(this.canvasContext)
  }
}
// Initializing components
CanvasLite.components = {};
// Setting cProto
cProto = CanvasLite.prototype
// Library related functions
CanvasLite.registerComponent = function (key, component, instanceMethod) {
  let comp = CanvasLite.components
  // Sanity checking of arguments
  registerComponentSanity.apply(null, arguments)
  // Registering as an component
  comp[key] = component;
  // registering instance method if provided
  if (instanceMethod) {
    if (cProto[constants.has](instanceMethod)) {
      errors.alreadyExists('instance method', key)
    }
    cProto[instanceMethod] = function (group) {
      return new component(this, group)
    }
  }
}
// Function to get registered components
CanvasLite.getComponent = function (key) {
  return CanvasLite.components[key]
}
// Importing other elements
require('../elements/basicelement')(CanvasLite)
require('../elements/group')(CanvasLite)
require('../elements/rootgroup')(CanvasLite)
// Getting canvas
RootGroup = CanvasLite.getComponent('RootGroup')
// Exporting Library
module.exports = CanvasLite;
