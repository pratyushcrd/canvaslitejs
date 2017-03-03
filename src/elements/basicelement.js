class BasicElement {
	constructor (canvasInstance, group) {
	}
}
// Exporting a function so that basicelement
// can be registered to constructor
module.exports = function (CanvasLite) {
	CanvasLite.registerComponent('BasicElement', BasicElement)
}