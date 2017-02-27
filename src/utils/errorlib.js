// function to throw error
function throwError(message) {
	throw Error(message)
}
// Exporting Error Library
module.exports = {
	elementNotFound: function (id) {
		throwError('Element with id \'' + id + '\' not found')
	},
	notACanvas: function () {
		throwError('Not a canvas Element')
	}
}