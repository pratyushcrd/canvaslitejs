let has = 'hasOwnProperty';
// Exporting library
module.exports = {
	applyAttr: function (el, ob) {
		let key;
		for (key in ob) {
			if (ob[has](key)) {
				el.setAttribute(key, ob[key]);
			}
		}
		return el
	}
}