// Exporting Error Library
module.exports = {
    elementNotFound: function (id) {
        throw Error('element with id \'' + id + '\' not found')
    },
    notACanvas: function () {
        throw Error('not a canvas Element')
    },
    alreadyExists: function (what, key) {
    	throw Error(what + ' with name \'' + key + '\' already exists')
    },
    mustBe: function (name, type) {
    	throw Error(name + ' must be a ' + type)
    },
    notDefined: function (name) {
        throw Error(name + ' is not defined')
    },
    default: function (message) {
        throw Error(message)
    }
}