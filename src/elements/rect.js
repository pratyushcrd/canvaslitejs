const supportedAttrs = {
		x: 'number',
		y: 'number',
		w: 'number',
		h: 'number',
		strokeWidth: 'number',
		fill: 'string',
		stroke: 'string'
	},
	defValues = {
		x: 100,
		y: 100,
		w: 100,
		h: 100,
		strokeWidth: 1,
		fill: '#ffffff',
		stroke: '#000000'
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
			const attrs = this.attrs
			ctx.beginPath()
			ctx.rect(attrs.x, attrs.y, attrs.w, attrs.h)
			ctx.fillStyle = attrs.fill;
			ctx.fill()
			ctx.lineWidth = attrs.strokeWidth;
			ctx.strokeStyle = attrs.stroke;
			ctx.stroke()
			ctx.closePath()
		}
	}

	// Registering component to Components and instance prototype
	CanvasLite.registerComponent('Rect', Rect, 'rect')
}