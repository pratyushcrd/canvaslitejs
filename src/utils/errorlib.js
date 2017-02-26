// Exporting Error Library
module.exports = {
	elementNotFound: function (id) {
		return 'Element with id \'' + id + '\' not found'
	},
	notACanvas: function () {
		return 'Not a canvas Element'
	}
}