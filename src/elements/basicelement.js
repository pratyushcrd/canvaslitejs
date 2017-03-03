class BasicElement {
	constructor (canvasInstance, group) {
	}
}
// Exporting a function so that basicelement
// can be register to constructor
module.exports = function (CanvasLite) {
	CanvasLite.registerComponent('BasicElement', BasicElement)
}