const supportedAttrs = {
		x: 'number',
		y: 'number',
		w: 'number',
		h: 'number'
	},
	defValues = {
		x: 100,
		y: 100,
		w: 100,
		h: 100
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
		__paint (ctx) {
			// Paint function here
		}
	}

	// Registering component to Components and instance prototype
	CanvasLite.registerComponent('Rect', Rect, 'rect')
}