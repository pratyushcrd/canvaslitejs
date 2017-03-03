
// Exporting a function so that basicelement
// can be register to constructor
module.exports = function (CanvasLite) {
	let basicEl = CanvasLite.getComponent('BasicElement', BasicElement)
	class Element extends BasicElement{

	}
}