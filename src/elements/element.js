// Exporting a function so that basicelement
// can be register to constructor
module.exports = function (CanvasLite) {
	const BasicElement = CanvasLite.getComponent('BasicElement')
	class Element extends BasicElement{
		constructor (canvas, group) {
			super(canvas, group)
		}
	}
	CanvasLite.registerComponent('Element', Element)
}