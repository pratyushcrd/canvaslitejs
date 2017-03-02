// Exporting Error Library
module.exports = {
    elementNotFound: function (id) {
        throw Error('element with id \'' + id + '\' not found')
    },
    notACanvas: function () {
        throw Error('not a canvas Element')
    },
    alreadyExists: function (key) {
    	throw Error('component with name \'' + key + '\' already exists')
    },
    mustBe: function (type) {
    	throw Error('must be a ' + type)
    }
}