// Exporting Error Library
module.exports = {
	elementNotFound: function (id) {
		throw Error('Element with id \'' + id + '\' not found')
	},
	notACanvas: function () {
		throw Error('Not a canvas Element')
	}
}