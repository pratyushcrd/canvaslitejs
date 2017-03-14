const supportedAttrs = {
		x: 'number',
		y: 'number',
		w: 'number',
		h: 'number'
	},
	defValues = {
		x: 0,
		y: 0,
		w: 0,
		h: 0
	}
/**
 * Exporting a function, so rect can inherit Element
 */
module.exports = function (CanvasLite) {
	const Element = CanvasLite.getComponent('Element')

	class Rect extends Element {
		constructor (canvas, group) {
			super(canvas, group, supportedAttrs, defValues)
		}
	}

	// Registering component to Components and instance prototype
	CanvasLite.registerComponent('Rect', Rect, 'rect')
}