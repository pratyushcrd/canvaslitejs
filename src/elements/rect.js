/**
 * Exporting a function, so rect can inherit Element
 */
module.exports = function (CanvasLite) {
	const Element = CanvasLite.getComponent('Element')

	class Rect extends Element {

	}

	// Registering component to Components and instance prototype
	CanvasLite.registerComponent('Rect', Rect, 'rect')
}